import React, { useEffect, useRef, createElement, useState } from "react";
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
  const [className, setClassName] = useState("");
  const dispatch = useDispatch();
  const animatedElement = useRef<HTMLDivElement>();
  const animation = `animation: ${animationName} ${duration}s ${delay}s forwards`;
  const display = as ? "display:block" : "";

  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    const element = animatedElement.current;
    const rect = element.getBoundingClientRect();
    let styles = `${animation};${display}`;

    if (!userAgent.includes("android")) {
      setClassName(animationName);
      styles = "";
    }

    dispatch(
      new AddElement({
        y: rect.top,
        ref: element,
        styles
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
    <div ref={animatedElement} className={className}>
      {children}
    </div>
  );
};

export default AnimationOnScroll;
