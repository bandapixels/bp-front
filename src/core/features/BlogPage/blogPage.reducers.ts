import { BlogPageState } from "./blogPage.state";

const initialState: BlogPageState = {
  posts: [],
  status: ""
};

const reducer = (state = initialState, action): BlogPageState => {
  switch (action.type) {
    case "GET_POSTS_SUCCESS":
      return {
        status: "success",
        posts: [...action.payload]
      };
    case "GET_POSTS_FAILED":
      return {
        posts: [],
        status: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
