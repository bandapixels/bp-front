import { useEffect, RefObject } from "react";
import { createGrid, addAnimationToGrid } from "./grid";

const useGrid = (
  ref: RefObject<HTMLElement>,
  mainColor: string,
  secondColor: string,
  child?: boolean
): void => {
  useEffect(() => {
    const wrapper = ref.current;

    if (
      wrapper.querySelectorAll(".gradient-vertical").length === 0 &&
      wrapper.querySelectorAll(".gradient-horizontal").length === 0
    ) {
      createGrid(wrapper, 75, child);
      if (window.outerWidth >= 1280) {
        document.addEventListener("mousemove", e => {
          addAnimationToGrid(e, mainColor, secondColor, wrapper);
        });
      }
    }
  });
};

export default useGrid;
