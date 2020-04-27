import React, { useEffect, useRef } from "react";
import { createGrid, addAnimationToGrid } from "../../../../utils/grid";

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
      <div className={styles.projectContent}>
        <div className={styles.projectInfo}>
          <h3 className={styles.projectTitle}>What problem do we solve</h3>
          <div className={styles.projectProblem}>
            <p>
              A problem is considered to be major when a reasonable consumer
              would not have bought the product if they had known the problem
              beforehand – for example, a toaster breaks down before a
              reasonable consumer would expect it to.
            </p>
            <p>
              If the product has some other problem that is not covered by
              ‘major problem’ above, it can be considered to be a minor problem.
              For example, it does not do what it is normally supposed to do but
              can be fixed easily and within a reasonable time.
            </p>
          </div>
          <span className={styles.readMore}>read more</span>
        </div>
        <div className={styles.projectMedia} />
      </div>
      <div className={styles.projectsFooter}>
        <div className={styles.projectsFooterLeftPart}>
          <Button type="button" classes="projectBtn">
            See the creation process
          </Button>
          <div className={styles.projectDescription}>
            <h3>TECOM</h3>
            <p>
              TECOM Conf is China's first Tech and Entrepreneur Communities
              conference.
              <br />
              TECOM Conf brings the most dynamic, engaging and vibrant
              Communities, Startups,
            </p>
          </div>
        </div>
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
