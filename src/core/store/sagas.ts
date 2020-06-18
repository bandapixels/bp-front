import { all, fork } from "@redux-saga/core/effects";

// sagas
import discussTheProjectSaga from "../features/MainPage/mainPage.sagas";

function* rootSaga(): Generator {
  yield all([fork(discussTheProjectSaga)]);
}

export default rootSaga;
