import { FullPageScrollState } from "./fullPageScroll.state";

const initialState: FullPageScrollState = {
  section: 0
};

const reducer = (state = initialState, action): FullPageScrollState => {
  switch (action.type) {
    case "CHANGE_SECTION":
      return {
        section: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
