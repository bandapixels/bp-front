import React, { useEffect, useRef, createElement } from "react";
import { useDispatch } from "react-redux";
import { AddElement } from "./animationOnScroll.actions";
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
  const dispatch = useDispatch();
  const animatedElement = useRef<HTMLDivElement>();
  const animation = `animation: ${animationName} ${duration}s ${delay}s forwards`;
  const display = as ? "display:block" : "";

  useEffect(() => {
    const element = animatedElement.current;
    const rect = element.getBoundingClientRect();
    dispatch(
      new AddElement({
        y: rect.top,
        ref: element,
        styles: `${animation};${display}`
      })
    );
  }, []);

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
