import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import {
  getSection,
  getCanScroll,
  getActiveAnimation
} from "../fullPageScroll.selectors";
import {
  changeSection,
  updateActiveAnimation,
  updateCanScroll
} from "../fullPageScroll.actions";
import { AppState } from "../../../store/store";
import { checkBrowser } from "../../../utils/checkBrowser";
import { getStart } from "../../Preloader/preloader.selectors";
import styles from "./fullPageScroll.scss";

const FullPageScroll: React.FunctionComponent = ({ children }) => {
  const router = useRouter();
  const refFullPage = useRef<HTMLDivElement>();
  const activeSec = useSelector((state: AppState) => getSection(state));
  const activeAnimation = useSelector((state: AppState) =>
    getActiveAnimation(state)
  );
  const canScroll = useSelector((state: AppState) => getCanScroll(state));
  const startScroll =
    router.pathname === "/"
      ? !useSelector((state: AppState) => getStart(state))
      : true;
  const dispatch = useDispatch();

  // move content to active section
  const scrollContent = (wrapper: HTMLElement, scrollHeight: number): void => {
    wrapper.setAttribute("style", `transform: translateY(${scrollHeight}vh)`);
    dispatch(updateActiveAnimation(true));
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

  const checkForHorizontal = (
    sections: NodeListOf<ChildNode>,
    index: number
  ): string => {
    const section = sections[index] as HTMLElement;

    return section.dataset.horizontal;
  };

  const scrollToSection = (scrollHeight: number, spinValue: number): void => {
    const wrapper = refFullPage.current;
    const sections = wrapper.childNodes;
    // change section
    scrollContent(wrapper, scrollHeight);
    // change header styles
    changeHeaderStyle(sections, spinValue);
    // allow to scroll after animation ending
    dispatch(changeSection(spinValue));
    setTimeout(() => {
      dispatch(updateCanScroll(true));
      dispatch(updateActiveAnimation(false));
    }, 1000);
  };

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({ top: 0 });
    }, 150);

    return (): void => dispatch(changeSection(0));
  }, []);

  useEffect((): (() => void) => {
    const browser = checkBrowser();
    const body = document.querySelector("body");
    const wrapper = refFullPage.current;
    const sections = wrapper.childNodes;
    let spinValue = activeSec;
    let scrollHeight =
      +wrapper.getAttribute("style")?.replace(/[^-\d]/g, "") || 0;
    changeHeaderStyle(sections, spinValue);

    const changeSlider = (e: WheelEvent): void => {
      // stop scrolling if popup opened
      if (body.classList.contains("removeScrolling")) {
        return;
      }

      // is scroll animation and  is scroll allowed
      if (activeAnimation || !canScroll) {
        return;
      }

      const horizontalLayout = checkForHorizontal(sections, spinValue);
      const deltaY = browser.name === "Firefox" ? e.deltaY * 40 : e.deltaY;

      if (horizontalLayout && deltaY && !activeAnimation && canScroll) {
        let activeSection = sections[spinValue] as HTMLElement;
        activeSection = activeSection.dataset.child
          ? (activeSection.querySelector(
              `.${activeSection.dataset.child}`
            ) as HTMLElement)
          : activeSection;
        const scrollPosition =
          activeSection.scrollWidth -
          Math.floor(activeSection.scrollLeft + activeSection.offsetWidth);

        if (
          (scrollPosition > 5 && deltaY > 0) ||
          (activeSection.scrollLeft > 5 && deltaY < 0)
        ) {
          activeSection.scrollLeft += deltaY;
          return;
        }
      }

      if (horizontalLayout && e.deltaX) {
        let activeSection = sections[spinValue] as HTMLElement;
        activeSection = activeSection.dataset.child
          ? (activeSection.querySelector(
              `.${activeSection.dataset.child}`
            ) as HTMLElement)
          : activeSection;
        const scrollDiff =
          activeSection.scrollWidth -
          Math.floor(activeSection.scrollLeft + activeSection.offsetWidth);

        if (scrollDiff <= 5 && e.deltaX > 0) {
          dispatch(updateCanScroll(false));
          // scroll down
          spinValue += 1;
          scrollHeight -= 100;

          scrollToSection(scrollHeight, spinValue);
          return;
        }

        if (activeSection.scrollLeft < 5 && e.deltaX < 0) {
          dispatch(updateCanScroll(false));
          // scroll up
          spinValue -= 1;
          scrollHeight += 100;

          scrollToSection(scrollHeight, spinValue);
          return;
        }
      }
      // wheel distance
      const powerOfScroll = Math.abs(deltaY);

      // check if buttons are not pressed and power of scroll (to avoid touchpad inertia)
      if (!e.shiftKey && !e.ctrlKey && !e.altKey && powerOfScroll >= 25) {
        const value = -e.deltaY || -e.detail;
        const delta = Math.max(-1, Math.min(1, value));
        const horizontalDetection = typeof e.deltaX !== "undefined";
        const isScrollingVertically =
          Math.abs(e.deltaX) < Math.abs(e.deltaY) || !horizontalDetection;

        if (canScroll) {
          // avoid multi swipes and horizontal scrolling
          if (isScrollingVertically) {
            dispatch(updateCanScroll(false));
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
              dispatch(updateCanScroll(true));
              return;
            }

            scrollToSection(scrollHeight, spinValue);
          }
        }
      }
    };

    let supportWheel = "";
    if ("onwheel" in document.createElement("div")) {
      supportWheel = "wheel"; // Modern browsers support "wheel"
      // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
      // @ts-ignore
    } else if (document.onmousewheel !== undefined) {
      supportWheel = "mousewheel"; // Webkit and IE support at least "mousewheel"
    }

    if (browser.name === "Firefox" && +browser.version < 60) {
      return;
    }

    if (window.innerWidth > 668 && startScroll) {
      body.classList.add("fullpage");

      document.addEventListener(supportWheel, changeSlider);
    }

    // eslint-disable-next-line consistent-return
    return (): void => {
      document.removeEventListener("mousewheel", changeSlider, false); // IE9, Chrome, Safari, Opera
      document.removeEventListener("wheel", changeSlider, false); // Firefox
      document.body.classList.remove("fullpage");
    };
  }, [startScroll, activeSec, canScroll, activeAnimation]);

  return (
    <>
      <div className={styles.fullpageWrapper} ref={refFullPage}>
        {children}
      </div>
    </>
  );
};

export default FullPageScroll;
