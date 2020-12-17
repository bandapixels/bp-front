import { AppState } from "../../store/store";

export const getStart = ({
  preloaderReducer: { startPreloader }
}: AppState): boolean => startPreloader;

export const getIsShow = ({
  preloaderReducer: { isShow }
}: AppState): boolean => isShow;
