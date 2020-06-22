import { BlogPageState } from "./blogPage.state";
import { PostsActions } from "./blogPage.actions";

const initialState: BlogPageState = {
  posts: []
};

const reducer = (state = initialState, action): BlogPageState => {
  switch (action.type) {
    case PostsActions.GET_POSTS_SUCCESS:
      return {
        posts: [...action.payload]
      };
    case PostsActions.GET_POSTS_FAILED:
      return {
        posts: []
      };
    default:
      return state;
  }
};

export default reducer;
