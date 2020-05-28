import React, { useEffect, useRef } from "react";
import "./animationOnScroll.module.scss";

interface AnimationOnScroll {
  animationName: string;
  duration: number;
  delay?: number;
}

const AnimationOnScroll: React.FunctionComponent<AnimationOnScroll> = ({
  children,
  animationName,
  duration,
  delay = 0
}) => {
  const animatedElement = useRef<HTMLDivElement>();
  const animation = `animation: ${animationName} ${duration}s ${delay}s forwards`;

  useEffect(() => {
    const element = animatedElement.current;
    const topPosition = element.getBoundingClientRect().top;

    const handlerScroll = (): void => {
      if (topPosition < window.innerHeight + window.scrollY) {
        element.setAttribute("style", animation);
      }
    };

    window.addEventListener("scroll", handlerScroll);

    return (): void => window.removeEventListener("scroll", handlerScroll);
  });

  return (
    <div ref={animatedElement} className={animationName}>
      {children}
    </div>
  );
};

export default AnimationOnScroll;
