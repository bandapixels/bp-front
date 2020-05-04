import React from "react";
import styles from "./project.module.scss";

interface ProjectProps {
  name: string;
  description?: string;
  problem?: string;
  video: string;
  url: string;
}

const Project: React.FunctionComponent<ProjectProps> = ({
  name,
  description,
  problem,
  video,
  url
}) => {
  return (
    <div className={styles.projectItem}>
      <div className={styles.projectContent}>
        <div className={styles.projectInfo}>
          <h3 className={styles.projectTitle}>What problem do we solve</h3>
          <div className={styles.projectProblem}>{problem}</div>
          <span className={styles.readMore}>read more</span>
        </div>
        <div className={styles.projectMedia} data-name={video} />
      </div>
      <div className={styles.projectsFooter}>
        <div className={styles.projectsFooterLeftPart}>
          <a href={url} className={styles.projectBtn}>
            See the creation process
          </a>
          <div className={styles.projectDescription}>
            <h3>{name}</h3>
            <div>{description}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
