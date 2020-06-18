import { combineReducers } from "redux";

import fullPageScrollReducer from "../shared/FullPageScroll/fullPageScroll.reducer";
import preloaderReducer from "../shared/Preloader/preloader.reducer";

export default combineReducers({
  fullPageScrollReducer,
  preloaderReducer
});
