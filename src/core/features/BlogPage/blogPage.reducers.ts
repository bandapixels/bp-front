import { BlogPageState } from "./blogPage.state";

const initialState: BlogPageState = {
  posts: []
};

const reducer = (state = initialState, action): BlogPageState => {
  switch (action.type) {
    case "GET_POSTS_SUCCESS":
      return {
        posts: [...action.payload]
      };
    case "GET_POSTS_FAILED":
      return {
        posts: []
      };
    default:
      return state;
  }
};

export default reducer;
