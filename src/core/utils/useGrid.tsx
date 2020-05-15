import { useEffect, RefObject } from "react";
import { createGrid, addAnimationToGrid } from "./grid";

const useGrid = (
  ref: RefObject<HTMLElement>,
  mainColor: string,
  secondColor: string,
  child?: boolean
): void => {
  useEffect(() => {
    if (globalThis.outerWidth >= 1280) {
      const wrapper = ref.current;

      createGrid(wrapper, 75, child);
      document.addEventListener("mousemove", e => {
        addAnimationToGrid(e, mainColor, secondColor, wrapper, child);
      });
    }
  });
};

export default useGrid;
