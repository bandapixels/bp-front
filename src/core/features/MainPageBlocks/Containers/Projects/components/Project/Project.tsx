import React from "react";
import styles from "./project.module.scss";

import Button from "../../../../../../shared/coreUi/Button/Button";

const Project: React.FunctionComponent = () => {
  return (
    <>
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
    </>
  );
};

export default Project;
