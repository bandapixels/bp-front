import { AppState } from "../../store/store";

export const getSection = ({
  fullPageScrollReducer: { section }
}: AppState): number => section;
