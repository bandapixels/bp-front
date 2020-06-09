import { combineReducers } from "redux";

import fullPageScrollReducer from "../shared/FullPageScroll/fullPageScroll.reducer";
import discussTheProjectReducer from "../features/MainPageBlocks/Containers/DiscussTheProject/discussTheProject.reducer";
import preloaderReducer from "../shared/Preloader/preloader.reducer";

export default combineReducers({
  fullPageScrollReducer,
  discussTheProjectReducer,
  preloaderReducer
});
