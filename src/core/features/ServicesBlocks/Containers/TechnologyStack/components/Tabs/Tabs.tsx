import React, { useState, useRef, useEffect } from "react";
import classNames from "classnames";
import Button from "../../../../../../shared/coreUi/Button/Button";
import styles from "./tabs.module.scss";

const Tabs: React.FunctionComponent = ({ children }) => {
  const [activeTab, setActiveTab] = useState(children[0].props.label);
  const [activeTabMob, setactiveTabMob] = useState(0);
  const refTab = useRef<HTMLDivElement>();
  const refLine = useRef<HTMLDivElement>();

  const handlerChangeTab = (label: string): void => {
    setActiveTab(label);
  };

  const scrollTopMobile = (): void => {
    if (globalThis.outerWidth <= 668) {
      const parent = refTab.current.offsetParent as HTMLElement;
      const offset = parent.offsetTop;

      globalThis.scrollTo({
        top: offset,
        behavior: "smooth"
      });
    }
  };

  const handlerPrevSlide = (): void => {
    if (activeTabMob > 0) {
      const newActiveSlide = activeTabMob - 1;
      const { label } = children[newActiveSlide].props;

      setactiveTabMob(newActiveSlide);
      setActiveTab(label);
      scrollTopMobile();
    }
  };

  const handlerNextSlide = (): void => {
    const slidesQuantity = React.Children.toArray(children).length - 1;

    if (slidesQuantity > activeTabMob) {
      const newActiveSlide = activeTabMob + 1;
      const { label } = children[newActiveSlide].props;

      setactiveTabMob(newActiveSlide);
      setActiveTab(label);
      scrollTopMobile();
    }
  };

  const changeLine = (): void => {
    // needed elements
    const contentWrapper = refTab.current;
    const mainWrapper = refLine.current;
    const leftLineWrapper = mainWrapper.querySelector(
      ".wrapperLeftLine"
    ) as HTMLElement;
    const rightLineWrapper = mainWrapper.querySelector(
      ".wrapperRightLine"
    ) as HTMLElement;
    const contentTitle = contentWrapper.querySelector(
      ".technologyType h3"
    ) as HTMLElement;
    const activeBtn = contentWrapper.querySelector(
      ".technologyContent .technologyActive button"
    ) as HTMLElement;
    const technologyType = contentWrapper.querySelector(
      ".technologyType"
    ) as HTMLElement;
    const leftLine = document.querySelector(".leftLine") as HTMLElement;
    const mainLine = document.querySelector(".mainLine") as HTMLElement;
    const rightLine = document.querySelector(".rightLine") as HTMLElement;

    // find height for main line
    const rightPoint = contentTitle.offsetTop + contentTitle.offsetHeight / 2;
    const leftPoint = activeBtn.offsetTop + activeBtn.offsetHeight / 2;
    const lineHeight = Math.abs(leftPoint - rightPoint);

    // find width for left and right lines
    const leftLineWidth =
      mainWrapper.offsetLeft -
      activeBtn.offsetLeft -
      activeBtn.offsetWidth -
      70;
    const rightLineWidth =
      contentTitle.parentElement.offsetLeft -
      mainWrapper.offsetLeft +
      mainWrapper.offsetWidth -
      40;

    // set needed size for wrappers
    mainWrapper.style.height = `${lineHeight}px`;
    leftLineWrapper.style.width = `${leftLineWidth}px`;
    rightLineWrapper.style.width = `${rightLineWidth}px`;

    // added animation for lines
    leftLine.style.animation = `lineAppeare 0.3s linear forwards`;
    mainLine.style.animation = `mainLineAppeare .3s linear .3s forwards`;
    rightLine.style.animation =
      rightPoint === leftPoint
        ? `lineAppeare .2s linear .3s forwards`
        : `lineAppeare .3s linear .6s forwards`;
    technologyType.style.animation =
      rightPoint === leftPoint
        ? `tabsAppear .8s .3s ease-in-out forwards`
        : `tabsAppear .8s .6s ease-in-out forwards`;
  };

  const removeLineAnimation = (): void => {
    const lineL = document.querySelector(".leftLine") as HTMLElement;
    const mainL = document.querySelector(".mainLine") as HTMLElement;
    const lineR = document.querySelector(".rightLine") as HTMLElement;

    lineL.style.animation = `none`;
    mainL.style.animation = `none`;
    lineR.style.animation = `none`;
  };

  useEffect(() => {
    removeLineAnimation();
    setTimeout(changeLine, 300);
  }, [activeTab]);

  return (
    <>
      <div className={styles.technologyContent} ref={refTab}>
        <ul className={styles.technologyTabs}>
          {React.Children.map(children, (tab: React.ReactElement) => {
            const { label } = tab.props;
            const classes = classNames({
              technologyActive: label === activeTab
            });

            return (
              <li
                onClick={(): void => handlerChangeTab(label)}
                key={label}
                className={classes}
              >
                <button type="button">
                  <span>{label}</span>
                </button>
              </li>
            );
          })}
        </ul>
        <div className={styles.line} ref={refLine}>
          <div className={styles.wrapperLeftLine}>
            <div className={styles.leftLine} />
          </div>
          <div className={styles.wrapperMainLine}>
            <div className={styles.mainLine} />
          </div>
          <div className={styles.wrapperRightLine}>
            <div className={styles.rightLine} />
          </div>
        </div>
        {React.Children.map(children, (tab: React.ReactElement) => {
          if (tab.props.label !== activeTab) return undefined;
          return tab.props.children;
        })}
      </div>
      <div className={styles.technologyBtnWrapper}>
        <Button
          type="button"
          classes="sliderPrev"
          handlerClick={handlerPrevSlide}
        >
          <img src="/images/icons/arrow.svg" alt="slider arrow prev" />
        </Button>
        <Button
          type="button"
          classes="sliderNext"
          handlerClick={handlerNextSlide}
        >
          <img src="/images/icons/arrow.svg" alt="slider arrow prev" />
        </Button>
      </div>
    </>
  );
};

export default Tabs;
