import { applyMiddleware, Store, createStore, compose } from "redux";

import reducer from "./reducers";

const configureStore: () => Store = () => {
  const devTools =
    typeof window === "object" &&
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const actionTransform = () => next => action => {
    const act = action.toJSON ? action.toJSON() : action;
    return next(act);
  };

  const composeEnhancers = devTools
    ? devTools({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        trace: true
      })
    : compose;

  const store: Store = createStore(
    reducer,
    composeEnhancers(applyMiddleware(actionTransform))
  );

  return store;
};

export default configureStore;
