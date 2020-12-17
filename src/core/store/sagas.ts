import { all, fork } from "@redux-saga/core/effects";

// sagas
import mainPageSaga from "../features/MainPage/mainPage.sagas";
import blogPageSaga from "../features/BlogPage/blogPage.sagas";
import articlesSaga from "../features/Error/error.sagas";

function* rootSaga(): Generator {
  yield all([fork(mainPageSaga), fork(blogPageSaga), fork(articlesSaga)]);
}

export default rootSaga;
