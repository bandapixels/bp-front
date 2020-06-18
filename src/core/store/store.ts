import { FullPageScrollState } from "../shared/FullPageScroll/fullPageScroll.state";
import { PreloaderState } from "../shared/Preloader/preloader.state";
import { ShowFormState } from "../features/MainPage/mainPage.state";

export interface AppState {
  fullPageScrollReducer: FullPageScrollState;
  preloaderReducer: PreloaderState;
  showFormReducer: ShowFormState;
}
