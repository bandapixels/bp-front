import React, { useEffect, useRef } from "react";

import styles from "./fullPageScroll.scss";

const FullPageScroll: React.FunctionComponent = ({ children }) => {
  const refFullPage = useRef<HTMLDivElement>();

  // move content to active section
  const scrollContent = (wrapper: HTMLElement, count: number): void => {
    wrapper.setAttribute(
      "style",
      `transform: translate3d(0, -${count * 100}vh, 0)`
    );
  };

  // change header styles
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

  // gets the average of the last `number` elements of the given array
  const getAverage = (elements: Array<number>, number: number): number => {
    let sum = 0;

    // taking `number` elements from the end to make the average, if there are not enought, 1
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
      // wheel distance
      const powerOfScroll = Math.abs(e.deltaY);

      // is scroll allowed
      if (!canScroll) {
        return;
      }

      // check if buttons are not pressed and power of scroll (to avoid touchpad inertia)
      if (!e.shiftKey && !e.ctrlKey && !e.altKey && powerOfScroll >= 25) {
        const value = -e.deltaY || -e.detail;
        const delta = Math.max(-1, Math.min(1, value));
        const horizontalDetection = typeof e.deltaX !== "undefined";
        const isScrollingVertically =
          Math.abs(e.deltaX) < Math.abs(e.deltaY) || !horizontalDetection;

        // Limiting the array to 150 (lets not waste memory!)
        if (scrollings.length > 149) {
          scrollings.shift();
        }

        // keeping record of the previous scrollings
        scrollings.push(Math.abs(value));

        // time difference between the last scroll and the current one
        const timeDiff = curTime - prevTime;
        prevTime = curTime;

        // enough to be consider a different scrolling action to scroll another section
        if (timeDiff > 200) {
          scrollings = [];
        }

        if (canScroll) {
          const averageEnd = getAverage(scrollings, 10);
          const averageMiddle = getAverage(scrollings, 70);
          const isAccelerating = averageEnd >= averageMiddle;

          // avoid multi swipes and horizontal scrolling
          if (isAccelerating && isScrollingVertically) {
            canScroll = false;

            if (delta < 0) {
              // scroll down
              if (spinValue < sections.length - 1) {
                spinValue += 1;
              } else {
                // allow to scroll if this is the last section
                canScroll = true;
                return;
              }
            } else if (delta > 0) {
              // scroll up
              if (spinValue > 0) {
                spinValue -= 1;
              } else {
                // allow to scroll if this is the first section
                canScroll = true;
                return;
              }
            }

            // change section
            scrollContent(wrapper, spinValue);
            // change header styles
            changeHeaderStyle(sections, spinValue);

            // allow to scroll after animation ending
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
