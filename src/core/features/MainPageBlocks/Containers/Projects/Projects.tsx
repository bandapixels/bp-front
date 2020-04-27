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
      `
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

        If the product has some other problem that is not covered by
        ‘major problem’ above, it can be considered to be a minor problem.
        For example, it does not do what it is normally supposed to do but
        can be fixed easily and within a reasonable time.
      `
    }
  ];

  const handlerPrevSlide = (): void => {
    const sliderContent = sliderList.current;
    const slideWidth = sliderContent.offsetWidth;

    if (activeSlide > 0) {
      const newActiveSlide = activeSlide - 1;

      sliderContent.style.transform = `translateX(-${slideWidth *
        newActiveSlide}px)`;

      setActiveSlide(newActiveSlide);
    }
  };

  const handlerNextSlide = (): void => {
    const slidesQuantity = projectsInfo.length - 1;
    const sliderContent = sliderList.current;
    const slideWidth = sliderContent.offsetWidth;

    if (slidesQuantity > activeSlide) {
      const newActiveSlide = activeSlide + 1;

      sliderContent.style.transform = `translateX(-${slideWidth *
        newActiveSlide}px)`;

      setActiveSlide(newActiveSlide);
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
    <section className={styles.projectsWrapper} ref={refGridWrapper}>
      <h3 className={styles.projectsMobTitle}>
        <span>Our</span> projects
      </h3>
      <div className={styles.projectsSlider}>
        <div className={styles.projectsSliderList} ref={sliderList}>
          {projectsInfo.map(proj => (
            <Project
              name={proj.name}
              description={proj.description}
              problem={proj.problem}
              key={proj.name}
            />
          ))}
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
