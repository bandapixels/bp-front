import React, { useEffect, useRef, useState } from "react";
import { createGrid, addAnimationToGrid } from "../../../../utils/grid";

import Project from "./components/Project/Project";
import Button from "../../../../shared/coreUi/Button/Button";

import styles from "./projects.module.scss";

const Projects: React.FunctionComponent = () => {
  const refGridWrapper = useRef<HTMLDivElement>();
  const sliderList = useRef<HTMLDivElement>();
  const [activeSlide, setActiveSlide] = useState(0);

  const projectsInfo = [
    {
      name: "TECOM",
      description: `
        TECOM Conf is China's first Tech and Entrepreneur Communities
        conference.
        
        TECOM Conf brings the most dynamic, engaging and vibrant
        Communities, Startups,
      `,
      problem: `
        A problem is considered to be major when a reasonable consumer
        would not have bought the product if they had known the problem
        beforehand – for example, a toaster breaks down before a
        reasonable consumer would expect it to.
        
        If the product has some other problem that is not covered by
        ‘major problem’ above, it can be considered to be a minor problem.
        For example, it does not do what it is normally supposed to do but
        can be fixed easily and within a reasonable time.
      `,
      video: "video2",
      url: "#"
    },
    {
      name: "TECOM-2",
      description: `
        TECOM-2 Conf is China's first Tech and Entrepreneur Communities
        conference.

        TECOM-2 Conf brings the most dynamic, engaging and vibrant
        Communities, Startups,
      `,
      problem: `
        A problem is considered to be major when a reasonable consumer
        would not have bought the product if they had known the problem
        beforehand – for example, a toaster breaks down before a
        reasonable consumer would expect it to.
      `,
      video: "video2",
      url: "#"
    }
  ];

  const scrollTopMobile = (): void => {
    if (globalThis.outerWidth <= 668) {
      const offset: number = refGridWrapper.current.offsetTop;

      globalThis.scrollTo({
        top: offset,
        behavior: "smooth"
      });
    }
  };

  const handlerPrevSlide = (): void => {
    if (activeSlide > 0) {
      const newActiveSlide = activeSlide - 1;

      setActiveSlide(newActiveSlide);
      scrollTopMobile();
    }
  };

  const handlerNextSlide = (): void => {
    const slidesQuantity = projectsInfo.length - 1;

    if (slidesQuantity > activeSlide) {
      const newActiveSlide = activeSlide + 1;

      setActiveSlide(newActiveSlide);
      scrollTopMobile();
    }
  };

  useEffect(() => {
    const mainWrapper = refGridWrapper.current;

    createGrid(mainWrapper, 75);

    document.addEventListener("mousemove", e => {
      addAnimationToGrid(e, "rgba(23,23,24,.1)", "#171718", mainWrapper);
    });
  }, []);

  return (
    <section
      className={styles.projectsWrapper}
      ref={refGridWrapper}
      data-header="black"
    >
      <h3 className={styles.projectsMobTitle}>
        <span>Our</span> projects
      </h3>
      <div className={styles.projectsSlider}>
        <div className={styles.projectsSliderList} ref={sliderList}>
          <Project
            name={projectsInfo[activeSlide].name}
            description={projectsInfo[activeSlide].description}
            problem={projectsInfo[activeSlide].problem}
            key={projectsInfo[activeSlide].name}
            video={projectsInfo[activeSlide].video}
            url={projectsInfo[activeSlide].url}
          />
        </div>
      </div>
      <div className={styles.sliderBtnWrapper}>
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
    </section>
  );
};

export default Projects;
