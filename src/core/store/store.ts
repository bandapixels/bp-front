import { FullPageScrollState } from "../shared/FullPageScroll/fullPageScroll.state";
import { DiscussTheProjectState } from "../features/MainPageBlocks/Containers/DiscussTheProject/discussTheProject.state";

export interface AppState {
  fullPageScrollReducer: FullPageScrollState;
  discussTheProjectReducer: DiscussTheProjectState;
}
