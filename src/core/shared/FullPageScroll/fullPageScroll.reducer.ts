import { FullPageScrollState } from "./fullPageScroll.state";

const initialState: FullPageScrollState = {
  section: 0,
  scrollings: []
};

const reducer = (state = initialState, action): FullPageScrollState => {
  switch (action.type) {
    case "CHANGE_SECTION":
      return {
        ...state,
        section: action.payload
      };
    case "UPDATE_SCROLLINGS":
      return {
        ...state,
        scrollings: [...action.payload]
      };
    default:
      return state;
  }
};

export default reducer;
