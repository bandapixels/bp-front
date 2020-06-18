import { applyMiddleware, compose, createStore, Store } from "redux";
import createSagaMiddleware from "@redux-saga/core";

import reducers from "./reducers";
import sagas from "./sagas";

export default function configureStore(initialState = {}): Store {
  const sagaMiddleware = createSagaMiddleware();
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const actionTransform = () => next => action => {
    const act = action.toJSON ? action.toJSON() : action;
    return next(act);
  };

  const middleware = [sagaMiddleware, actionTransform];

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const devTools =
    typeof window === "object" &&
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

  const composeEnhancers = devTools
    ? devTools({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        trace: true
      })
    : compose;

  const store = createStore(
    reducers,
    initialState,
    composeEnhancers(applyMiddleware(...middleware))
  );

  // eslint-disable-next-line @typescript-eslint/no-explicit-any,func-names
  let sagaTask: any = sagaMiddleware.run(function*() {
    yield sagas();
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { hot } = module as any;
  if (hot) {
    // Enable Webpack hot module replacement for reducers
    hot.accept("./reducers", () => {
      // eslint-disable-next-line global-require
      const nextRootReducer = require("./reducers").default;
      store.replaceReducer(nextRootReducer);
    });

    // HRM for sagas
    hot.accept("./sagas", () => {
      // eslint-disable-next-line global-require
      const newRootSaga = require("./sagas").default;
      sagaTask.cancel();
      sagaTask.done.then(() => {
        // eslint-disable-next-line func-names
        sagaTask = sagaMiddleware.run(function*() {
          yield newRootSaga();
        });
      });
    });
  }

  return store;
}
