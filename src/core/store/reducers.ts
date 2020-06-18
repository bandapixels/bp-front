import { combineReducers } from "redux";

import fullPageScrollReducer from "../shared/FullPageScroll/fullPageScroll.reducer";
import preloaderReducer from "../shared/Preloader/preloader.reducer";
import showFormReducer from "../features/MainPage/mainPage.reducers";
import blogPageReducer from "../features/BlogPage/blogPage.reducers";

export default combineReducers({
  fullPageScrollReducer,
  preloaderReducer,
  showFormReducer,
  blogPageReducer
});
