import React, { useEffect, useRef } from "react";

import styles from "./fullPageScroll.scss";

const FullPageScroll: React.FunctionComponent = ({ children }) => {
  const refFullPage = useRef<HTMLDivElement>();

  const scrollContent = (wrapper: HTMLElement, count: number): void => {
    wrapper.setAttribute(
      "style",
      `transform: translate3d(0, -${count * 100}vh, 0)`
    );
  };

  const changeHeaderStyle = (
    sections: NodeListOf<ChildNode>,
    index: number
  ): void => {
    const activeSection = sections[index] as HTMLElement;
    const headerType = activeSection.dataset.header;
    const header = document.querySelector(".header");

    switch (headerType) {
      case "yellow":
        header.className = "header";
        header.classList.add("smallYellowHeader");
        break;
      case "black":
        header.className = "header";
        header.classList.add("smallDarkHeader");
        break;
      default:
        header.className = "header";
        break;
    }
  };

  const getAverage = (elements, number): number => {
    let sum = 0;

    const lastElements = elements.slice(Math.max(elements.length - number, 1));

    for (let i = 0; i < lastElements.length; i++) {
      sum += lastElements[i];
    }

    return Math.ceil(sum / number);
  };

  useEffect(() => {
    const body = document.querySelector("body");
    const wrapper = refFullPage.current;
    const sections = wrapper.childNodes;
    let spinValue = 0;
    let canScroll = true;
    let scrollings = [];
    let prevTime = new Date().getTime();

    body.classList.add("fullpage");

    const changeSlider = (e: WheelEvent): void => {
      const curTime = new Date().getTime();
      const powerOfScroll = Math.abs(e.deltaY);

      if (!canScroll) {
        return;
      }

      if (!e.shiftKey && !e.ctrlKey && !e.altKey && powerOfScroll >= 25) {
        const value = -e.deltaY || -e.detail;
        const delta = Math.max(-1, Math.min(1, value));
        const horizontalDetection = typeof e.deltaX !== "undefined";
        const isScrollingVertically =
          Math.abs(e.deltaX) < Math.abs(e.deltaY) || !horizontalDetection;

        if (scrollings.length > 149) {
          scrollings.shift();
        }

        scrollings.push(Math.abs(value));

        const timeDiff = curTime - prevTime;
        prevTime = curTime;
        if (timeDiff > 200) {
          scrollings = [];
        }

        if (canScroll) {
          const averageEnd = getAverage(scrollings, 10);
          const averageMiddle = getAverage(scrollings, 70);
          const isAccelerating = averageEnd >= averageMiddle;

          if (isAccelerating && isScrollingVertically) {
            canScroll = false;

            if (delta < 0) {
              if (spinValue < sections.length - 1) {
                spinValue += 1;
              } else {
                canScroll = true;
                return;
              }
            } else if (delta > 0) {
              if (spinValue > 0) {
                spinValue -= 1;
              } else {
                canScroll = true;
                return;
              }
            }

            scrollContent(wrapper, spinValue);
            changeHeaderStyle(sections, spinValue);

            setTimeout(() => {
              canScroll = true;
            }, 1000);
          }
        }
      }
    };

    if (document.querySelector(".fullpage") && window.innerWidth > 668) {
      window.addEventListener("mousewheel", changeSlider);
    }
  });

  return (
    <div className={styles.fullpageWrapper} ref={refFullPage}>
      {children}
    </div>
  );
};

export default FullPageScroll;
