import { Action } from "../../store/store";
import { BlogPageState } from "./blogPage.state";

export enum PostsActions {
  GET_POSTS = "[BlogPage] get posts",
  GET_POSTS_SUCCESS = "[BlogPage] save posts to the store",
  GET_POSTS_FAILED = "[BlogPage] get posts failed"
}

export class GetPosts extends Action {
  readonly type = PostsActions.GET_POSTS;
}

export class GetPostsSuccess extends Action {
  readonly type = PostsActions.GET_POSTS_SUCCESS;

  constructor(public payload: { posts: BlogPageState }) {
    super();
  }
}

export class GetPostsFailed extends Action {
  readonly type = PostsActions.GET_POSTS_FAILED;
}
