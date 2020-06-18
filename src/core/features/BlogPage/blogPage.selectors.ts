import { AppState } from "../../store/store";

export const getAllPosts = ({ blogPageReducer: { posts } }: AppState): {} =>
  posts;
