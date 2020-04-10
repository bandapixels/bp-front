import { useEffect, RefObject } from "react";

const useOutsideClick = (
  ref: RefObject<HTMLElement>,
  callback: () => void
): void => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleClick = (e: any): void => {
    if (ref.current && !ref.current.contains(e.target)) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClick);

    return (): void => {
      document.removeEventListener("click", handleClick);
    };
  });
};

export default useOutsideClick;
