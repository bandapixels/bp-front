import { PreloaderState } from "./preloader.state";

const initialState: PreloaderState = {
  startPreloader: true,
  isShow: false
};

const reducer = (state = initialState, action): PreloaderState => {
  switch (action.type) {
    case "SET_START":
      return {
        ...state,
        startPreloader: false
      };
    case "SET_IS_SHOW":
      return {
        ...state,
        isShow: true
      };
    default:
      return state;
  }
};

export default reducer;
