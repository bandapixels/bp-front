import { AppState } from "../../store/store";

export const getAllPosts = ({ blogPageReducer: { posts } }: AppState): {} =>
  posts;

export const getStatus = ({ blogPageReducer: { status } }: AppState): string =>
  status;
