import { all, fork, call, put, take } from "@redux-saga/core/effects";
import { SagaIterator } from "@redux-saga/types";
import { getPostsSuccess, getPostsFailed } from "./blogPage.actions";
import PostsReq from "../../api/posts-request";

function* watchGetPosts(): SagaIterator {
  yield take("GET_POSTS");

  try {
    const { data } = yield call(PostsReq.GetPosts);
    yield put(getPostsSuccess(data));
  } catch (e) {
    yield put(getPostsFailed(e));
  }
}

export default function* root(): SagaIterator {
  yield all([fork(watchGetPosts)]);
}
