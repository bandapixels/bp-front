import { all, fork, call, put, take } from "@redux-saga/core/effects";
import { SagaIterator } from "@redux-saga/types";
import {
  GetPostsSuccess,
  GetPostsFailed,
  PostsActions
} from "./blogPage.actions";
import PostsReq from "../../api/posts-request";

function* watchGetPosts(): SagaIterator {
  yield take(PostsActions.GET_POSTS);

  try {
    const { data } = yield call(PostsReq.GetPosts);
    yield put(new GetPostsSuccess(data));
  } catch (e) {
    yield put(new GetPostsFailed());
  }
}

export default function* root(): SagaIterator {
  yield all([fork(watchGetPosts)]);
}
