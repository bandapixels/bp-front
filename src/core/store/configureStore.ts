import { createStore, Store } from "redux";

import reducer from "./reducers";

const configureStore: () => Store = () => {
  const store = createStore(reducer);

  return store;
};

export default configureStore;
