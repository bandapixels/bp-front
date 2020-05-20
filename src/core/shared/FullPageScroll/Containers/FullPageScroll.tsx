import React, { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getSection } from "../fullPageScroll.selectors";
import { changeSection } from "../fullPageScroll.actions";
import { AppState } from "../../../store/store";

import styles from "./fullPageScroll.scss";

interface FullPageScrollProps {
  startScroll: boolean;
}

const FullPageScroll: React.FunctionComponent<FullPageScrollProps> = ({
  startScroll,
  children
}) => {
  const [activeAnimation, setActiveAnimation] = useState(false);
  const [loadSection, setLoadSection] = useState(0);
  const refFullPage = useRef<HTMLDivElement>();
  const activeSec = useSelector((state: AppState) => getSection(state));
  const dispatch = useDispatch();

  // move content to active section
  const scrollContent = (wrapper: HTMLElement, scrollHeight: number): void => {
    wrapper.setAttribute("style", `transform: translateY(${scrollHeight}vh)`);
    setActiveAnimation(true);
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
      case "full-yellow":
        header.className = "header";
        header.classList.add("smallFullYellowHeader");
        break;
      case "big-yellow":
        header.className = "header";
        header.classList.add("bigYellowHeader");
        break;
      case "blog-header":
        header.className = "header";
        header.classList.add("blogHeader");
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

  // find active section whep page reloaded
  const handlerOnLoad = (sections: NodeListOf<ChildNode>): number => {
    let active = 0;

    sections.forEach((el: HTMLElement, index: number) => {
      if (el.offsetTop - window.pageYOffset < 10) {
        active = index;
      }
    });

    return active;
  };

  const checkForHorizontal = (
    sections: NodeListOf<ChildNode>,
    index: number
  ): string => {
    const section = sections[index] as HTMLElement;
    const horizontalScroll = section.dataset.horizontal;

    return horizontalScroll;
  };

  useEffect(() => {
    const wrapper = refFullPage.current;
    const sections = wrapper.childNodes;

    setTimeout(() => {
      const sectionOnLoad = handlerOnLoad(sections);

      dispatch(changeSection(sectionOnLoad));
      setLoadSection(sectionOnLoad);
    }, 200);
  }, []);

  useEffect(() => {
    const body = document.querySelector("body");
    const wrapper = refFullPage.current;
    const sections = wrapper.childNodes;
    let spinValue = activeSec;
    let scrollHeight =
      +wrapper.getAttribute("style")?.replace(/[^-\d]/g, "") || 0;
    let canScroll = true;
    let scrollings = [];
    let prevTime = new Date().getTime();
    changeHeaderStyle(sections, spinValue);

    const changeSlider = (e: WheelEvent): void => {
      // stop scrolling if popup opened
      if (body.classList.contains("removeScrolling")) {
        return;
      }

      if (activeAnimation) {
        return;
      }

      const horizontalLayout = checkForHorizontal(sections, spinValue);

      if (horizontalLayout && e.deltaY > 0 && !activeAnimation && canScroll) {
        let activeSection = sections[spinValue] as HTMLElement;
        activeSection = activeSection.dataset.child
          ? (activeSection.querySelector(
              `.${activeSection.dataset.child}`
            ) as HTMLElement)
          : activeSection;
        const scrollDiff =
          activeSection.scrollWidth -
          Math.floor(activeSection.scrollLeft + activeSection.offsetWidth);

        if (scrollDiff <= 5) {
          activeSection.scrollLeft = 0;
        } else {
          activeSection.scrollLeft += e.deltaY;
          return;
        }
      }

      // is scroll allowed
      if (!canScroll) {
        return;
      }

      const curTime = new Date().getTime();
      // wheel distance
      const powerOfScroll = Math.abs(e.deltaY);

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

            if (delta < 0 && spinValue < sections.length - 1) {
              // scroll down
              spinValue += 1;
              scrollHeight -= 100;
            } else if (delta > 0 && spinValue > 0) {
              // scroll up
              spinValue -= 1;
              scrollHeight += 100;
            } else {
              // allow to scroll if this is the first section
              canScroll = true;
              return;
            }

            // change section
            scrollContent(wrapper, scrollHeight);
            // change header styles
            changeHeaderStyle(sections, spinValue);
            // allow to scroll after animation ending
            setTimeout(() => {
              canScroll = true;
              setActiveAnimation(false);
              dispatch(changeSection(spinValue));
            }, 1000);
          }
        }
      }
    };

    if (window.innerWidth > 668 && startScroll) {
      body.classList.add("fullpage");
      window.addEventListener("mousewheel", changeSlider);
    }

    return (): void => {
      window.removeEventListener("mousewheel", changeSlider);
    };
  }, [startScroll, loadSection]);

  return (
    <>
      <div className={styles.fullpageWrapper} ref={refFullPage}>
        {children}
      </div>
    </>
  );
};

export default FullPageScroll;
