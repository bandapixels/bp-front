import React, { useEffect, useRef, createElement } from "react";
import "./animationOnScroll.module.scss";

export enum AnimationNames {
  fadeInUp = "fadeInUp",
  zoomIn = "zoomIn",
  fadeIn = "fadeIn",
  fadeInRight = "fadeInRight",
  fadeInLeft = "fadeInLeft",
  rollInLeft = "rollInLeft",
  rollInRight = "rollInRight"
}

interface AnimationOnScroll {
  animationName: AnimationNames;
  duration: number;
  delay?: number;
  as?: "span" | "div";
}

const AnimationOnScroll: React.FunctionComponent<AnimationOnScroll> = ({
  children,
  animationName,
  duration,
  delay = 0,
  as
}) => {
  const animatedElement = useRef<HTMLDivElement>();
  const animation = `animation: ${animationName} ${duration}s ${delay}s forwards`;
  const display = as ? "display:block" : "";

  useEffect(() => {
    const element = animatedElement.current;
    const rect = element.getBoundingClientRect();

    const handlerScroll = (): void => {
      if (
        rect.top <= window.innerHeight + window.scrollY &&
        rect.left <= window.innerWidth + window.scrollX
      ) {
        element.setAttribute("style", `${animation}; ${display}`);
      }
    };

    window.addEventListener("scroll", handlerScroll);

    return (): void => window.removeEventListener("scroll", handlerScroll);
  });

  return as ? (
    createElement(
      `${as}`,
      { ref: animatedElement, className: animationName },
      children
    )
  ) : (
    <div ref={animatedElement} className={animationName}>
      {children}
    </div>
  );
};

export default AnimationOnScroll;
