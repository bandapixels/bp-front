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

  useEffect(() => {
    const body = document.querySelector("body");
    const wrapper = refFullPage.current;
    const sections = wrapper.childNodes;
    let spinValue = 0;
    let canScroll = true;

    body.classList.add("fullpage");

    if (document.querySelector(".fullpage") && window.innerWidth > 668) {
      window.addEventListener("mousewheel", (e: WheelEvent) => {
        if (!canScroll) {
          return;
        }

        if (canScroll && !e.shiftKey && e.deltaX === 0) {
          canScroll = false;

          if (e.deltaY > 0) {
            // down
            if (spinValue < sections.length - 1) {
              spinValue += 1;
            } else {
              canScroll = true;
              return;
            }
          } else if (!canScroll) {
            // up
            if (spinValue > 0) {
              spinValue -= 1;
            } else {
              canScroll = true;
              return;
            }
          }

          scrollContent(wrapper, spinValue);
          changeHeaderStyle(sections, spinValue);
        }

        setTimeout(() => {
          canScroll = true;
        }, 1000);
      });
    }
  });

  return (
    <div className={styles.fullpageWrapper} ref={refFullPage}>
      {children}
    </div>
  );
};

export default FullPageScroll;
