import React, { useEffect, useRef } from "react";
import { createGrid, addAnimationToGrid } from "../../../../utils/grid";

import Project from "./components/Project/Project";
import Button from "../../../../shared/coreUi/Button/Button";

import styles from "./projects.module.scss";

const Projects: React.FunctionComponent = () => {
  const refGridWrapper = useRef<HTMLDivElement>();

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
        <Project />
      </div>
      <div className={styles.sliderBtnWrapper}>
        <Button type="button" classes="sliderPrev">
          <img src="/images/icons/arrow.svg" alt="slider arrow prev" />
        </Button>
        <Button type="button" classes="sliderNext">
          <img src="/images/icons/arrow.svg" alt="slider arrow prev" />
        </Button>
      </div>
    </section>
  );
};

export default Projects;
