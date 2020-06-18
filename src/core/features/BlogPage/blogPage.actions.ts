import { BlogPageState } from "./blogPage.state";

export const getPosts = (): { type: string } => {
  return { type: "GET_POSTS" };
};

export const getPostsSuccess = (
  posts: BlogPageState
): { type: string; payload: BlogPageState } => {
  return { type: "GET_POSTS_SUCCESS", payload: posts };
};

export const getPostsFailed = (
  failureStatus: string
): { type: string; payload: string } => {
  return { type: "GET_POSTS_FAILED", payload: failureStatus };
};
