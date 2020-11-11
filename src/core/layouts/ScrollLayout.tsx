import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppState } from "../store/store";
import { getElements } from "../utils/AnimationOnScroll/animationOnScroll.selectors";
import { RemoveElements } from "../utils/AnimationOnScroll/animationOnScroll.actions";

const ScrollLayout: React.FunctionComponent = ({ children }) => {
  const animatedElements = useSelector((state: AppState) => getElements(state));
  const dispatch = useDispatch();

  useEffect(() => {
    const handleScroll = (): void => {
      animatedElements.forEach(({ y, ref, styles }) => {
        if (y <= window.innerHeight + window.scrollY) {
          ref.setAttribute("style", styles);
        }
      });
    };

    const intersection = (): void => {
      animatedElements.forEach(({ ref, styles }) => {
        const options = {
          root: null,
          rootMargin: "10% 100%",
          threshold: 0.1
        };

        const handleIntersect = (entries): void => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const elem = entry.target;

              if (entry.intersectionRatio > 0.1) {
                elem.setAttribute("style", styles);
              }
            }
          });
        };

        const observer = new IntersectionObserver(handleIntersect, options);
        observer.observe(ref);
      });
    };

    if ("IntersectionObserver" in window) {
      intersection();
    } else {
      window.addEventListener("scroll", handleScroll);
    }

    return (): void => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [animatedElements]);

  useEffect(() => {
    return (): void => dispatch(new RemoveElements());
  }, []);

  return <>{children}</>;
};

export default ScrollLayout;
