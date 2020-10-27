import { useState, useEffect } from "react";

const useIsMobile = (): boolean => {
  const [isMobile, setIsMobile] = useState(false);

  const handlerIsMobile = (): void => {
    setIsMobile(window.innerWidth < 669);
  };

  useEffect(() => {
    handlerIsMobile();

    window.addEventListener("resize", handlerIsMobile);

    return (): void => {
      window.removeEventListener("resize", handlerIsMobile);
    };
  }, []);

  return isMobile;
};

export default useIsMobile;
