import { AppState } from "../../store/store";

export const getSection = ({
  fullPageScrollReducer: { section }
}: AppState): number => section;

export const getScrollings = ({
  fullPageScrollReducer: { scrollings }
}: AppState): number[] => scrollings;
