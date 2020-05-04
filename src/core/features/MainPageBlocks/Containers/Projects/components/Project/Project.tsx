import React, { useState, useEffect } from "react";

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
  const [visiblePart, setVisiblePart] = useState(problem);
  const [hiddenPart, setHiddenPart] = useState("");
  const [visible, setVisible] = useState(false);

  const splitTextForMobile = (): void => {
    if (globalThis.outerWidth <= 668) {
      const textArr = visiblePart.split("").filter(word => word.length > 0);

      if (textArr.length > 120) {
        setVisiblePart(textArr.slice(0, 120).join(""));
        setHiddenPart(textArr.slice(120).join(""));
      }
    }
  };

  const handlerShowMore = (): void => {
    setVisible(!visible);
  };

  useEffect(() => {
    splitTextForMobile();
  }, []);

  return (
    <div className={styles.projectItem}>
      <div className={styles.projectContent}>
        <div className={styles.projectInfo}>
          <h3 className={styles.projectTitle}>What problem do we solve</h3>
          <div className={styles.projectProblem}>
            {visiblePart}
            {hiddenPart && visible ? { hiddenPart } : "..."}
          </div>
          {!visible && (
            <span className={styles.readMore} onClick={handlerShowMore}>
              read more
            </span>
          )}
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
