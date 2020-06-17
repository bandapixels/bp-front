import { FullPageScrollState } from "../shared/FullPageScroll/fullPageScroll.state";
import { DiscussTheProjectState } from "../features/MainPage/Containers/DiscussTheProject/discussTheProject.state";
import { PreloaderState } from "../shared/Preloader/preloader.state";

export interface AppState {
  fullPageScrollReducer: FullPageScrollState;
  discussTheProjectReducer: DiscussTheProjectState;
  preloaderReducer: PreloaderState;
}
