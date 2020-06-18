import { all, fork } from "@redux-saga/core/effects";

// sagas
import mainPageSaga from "../features/MainPage/mainPage.sagas";
import blogPageSaga from "../features/BlogPage/blogPage.sagas";

function* rootSaga(): Generator {
  yield all([fork(mainPageSaga), fork(blogPageSaga)]);
}

export default rootSaga;
