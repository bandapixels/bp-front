import React, { useRef, useState } from "react";
import classNames from "classnames";
import { useRouter } from "next/router";
import useGrid from "../../../../utils/useGrid";
import Project from "./components/Project/Project";
import Button from "../../../../shared/coreUi/Button/Button";

import styles from "./projects.module.scss";

const Projects: React.FunctionComponent = () => {
  const router = useRouter();
  const refGridWrapper = useRef<HTMLDivElement>();
  const [activeSlide, setActiveSlide] = useState(0);
  const projectsClasses = classNames(styles.projectsWrapper, {
    projectsPageWrapper: router.pathname === "/projects"
  });

  const projectsInfo = [
    {
      name: "AppNavi",
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
      video: "/videos/AppNavi_animate.mp4",
      url: "/appnavi",
      orientation: "landscape",
      position: "right"
    },
    {
      name: "DCR",
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
      video: "/videos/dcr.mp4",
      url: "#",
      orientation: "landscape",
      position: "left"
    },
    {
      name: "Shed",
      description: `
        TECOM-3 Conf is China's first Tech and Entrepreneur Communities
        conference.

        TECOM-3 Conf brings the most dynamic, engaging and vibrant
        Communities, Startups,
      `,
      problem: `
        A problem is considered to be major when a reasonable consumer
        would not have bought the product if they had known the problem
        beforehand – for example, a toaster breaks down before a
        reasonable consumer would expect it to.
      `,
      video: "/videos/shed.mp4",
      url: "#",
      orientation: "landscape",
      position: "right"
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
    let newActiveSlide = activeSlide;

    if (activeSlide > 0) {
      newActiveSlide = activeSlide - 1;
    } else if (activeSlide === 0) {
      newActiveSlide = projectsInfo.length - 1;
    }

    setActiveSlide(newActiveSlide);
    scrollTopMobile();
  };

  const handlerNextSlide = (): void => {
    const lastSlide = projectsInfo.length - 1;
    let newActiveSlide = activeSlide;

    if (lastSlide > activeSlide) {
      newActiveSlide = activeSlide + 1;
    } else if (lastSlide === activeSlide) {
      newActiveSlide = 0;
    }

    setActiveSlide(newActiveSlide);
    scrollTopMobile();
  };

  useGrid(refGridWrapper, "rgba(23,23,24,0.1)", "#171718");

  return (
    <section
      className={projectsClasses}
      ref={refGridWrapper}
      data-header="black"
    >
      <h3 className={styles.projectsMobTitle}>
        <span>Our</span> projects
      </h3>
      <div className={styles.projectsSlider}>
        <div className={styles.projectsSliderList}>
          <Project
            name={projectsInfo[activeSlide].name}
            description={projectsInfo[activeSlide].description}
            problem={projectsInfo[activeSlide].problem}
            key={projectsInfo[activeSlide].name}
            video={projectsInfo[activeSlide].video}
            url={projectsInfo[activeSlide].url}
            orientation={projectsInfo[activeSlide].orientation}
            position={projectsInfo[activeSlide].position}
            activeSlide={activeSlide}
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
