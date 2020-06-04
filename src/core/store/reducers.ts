import { combineReducers } from "redux";

import fullPageScrollReducer from "../shared/FullPageScroll/fullPageScroll.reducer";
import discussTheProjectReducer from "../features/MainPageBlocks/Containers/DiscussTheProject/discussTheProject.reducer";

export default combineReducers({
  fullPageScrollReducer,
  discussTheProjectReducer
});
