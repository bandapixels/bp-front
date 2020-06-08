import { useEffect, RefObject } from "react";
import { createGrid, removeGrid } from "./grid";

const useRedrawGrid = (ref: RefObject<HTMLElement>, child?: boolean): void => {
  useEffect(() => {
    const wrapper = ref.current;

    const updateGridOnResize = (): void => {
      removeGrid(wrapper);
      createGrid(wrapper, 75, child);
    };

    window.addEventListener("resize", updateGridOnResize);

    return (): void => {
      window.removeEventListener("resize", updateGridOnResize);
    };
  });
};

export default useRedrawGrid;
