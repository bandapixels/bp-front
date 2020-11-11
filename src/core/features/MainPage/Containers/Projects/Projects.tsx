import React, { useRef, useState } from "react";
import classNames from "classnames";
import { useRouter } from "next/router";
import useGrid from "../../../../utils/useGrid";
import Project from "./components/Project/Project";
import Button from "../../../../shared/coreUi/Button/Button";
import ArrowForSlider from "../../../../shared/Icons/ArrowForSlider";
import styles from "./projects.module.scss";
import useRedrawGrid from "../../../../utils/useRedrawGrid";
import constants from "../../../../shared/constants";

const Projects: React.FunctionComponent = () => {
  const router = useRouter();
  const refGridWrapper = useRef<HTMLDivElement>();
  const [activeSlide, setActiveSlide] = useState(0);
  const projectsClasses = classNames(styles.projectsWrapper, {
    projectsPageWrapper: router.pathname === "/projects"
  });

  const projectsInfo = constants.projects;

  const scrollTopMobile = (): void => {
    if (window.outerWidth <= 668) {
      const offset: number = refGridWrapper.current.offsetTop;

      window.scrollTo({
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

  useGrid(refGridWrapper, "rgba(167,167,167,0.1)", "#171718");
  useRedrawGrid(refGridWrapper);

  return (
    <>
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
              footerTitle={projectsInfo[activeSlide].footerTitle}
              footerDescription={projectsInfo[activeSlide].footerDescription}
              description={projectsInfo[activeSlide].description}
              key={projectsInfo[activeSlide].title}
              video={projectsInfo[activeSlide].video}
              url={projectsInfo[activeSlide].url}
              orientation={projectsInfo[activeSlide].orientation}
              position={projectsInfo[activeSlide].position}
              title={projectsInfo[activeSlide].title}
            />
          </div>
        </div>
        <div className={styles.sliderBtnWrapper}>
          <Button
            type="button"
            classes="sliderPrev"
            handlerClick={handlerPrevSlide}
          >
            <ArrowForSlider />
          </Button>
          <Button
            type="button"
            classes="sliderNext"
            handlerClick={handlerNextSlide}
          >
            <ArrowForSlider />
          </Button>
        </div>
      </section>
    </>
  );
};

export default Projects;
