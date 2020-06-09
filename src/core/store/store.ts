import { FullPageScrollState } from "../shared/FullPageScroll/fullPageScroll.state";
import { PreloaderState } from "../shared/Preloader/preloader.state";

export interface AppState {
  fullPageScrollReducer: FullPageScrollState;
  preloaderReducer: PreloaderState;
}
