import { FullPageScrollState } from "../shared/FullPageScroll/fullPageScroll.state";
import { PreloaderState } from "../shared/Preloader/preloader.state";
import { ShowFormState } from "../features/MainPage/mainPage.state";
import { BlogPageState } from "../features/BlogPage/blogPage.state";

export interface AppState {
  fullPageScrollReducer: FullPageScrollState;
  preloaderReducer: PreloaderState;
  showFormReducer: ShowFormState;
  blogPageReducer: BlogPageState;
}
