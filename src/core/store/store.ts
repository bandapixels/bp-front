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

export class Action {
  readonly type: string;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload?: any;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  toJSON(): Record<string, any> {
    return { ...this };
  }
}

export interface ConnectedProps {
  dispatch?: (act: Action) => void;
}
