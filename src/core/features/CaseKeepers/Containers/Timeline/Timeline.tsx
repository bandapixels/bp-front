import React from "react";
import useIsMobile from "../../../../utils/useIsMobile";
import styles from "./timeline.module.scss";

const Timeline: React.FunctionComponent = () => {
  const isMobile = useIsMobile();

  return (
    <section className={styles.keepersTimeline}>
      <div className={styles.keepersTimelineWrapper}>
        <div className={styles.keepersTimelineContent}>
          <h1>Project Timeline</h1>
          <p>
            Convenient and new Collaboration Suite for professionals and their
            customers. This is smart. It is fast.
          </p>
        </div>
      </div>
      {isMobile ? (
        <div className={styles.keepersTimelineImagesWrapper}>
          <img
            src="/images/projects/caseKeepers/timeline-mobile.svg"
            alt="CaseKeepers Timeline"
          />
        </div>
      ) : (
        <img
          src="/images/projects/caseKeepers/timeline.png"
          alt="CaseKeepers Timeline"
        />
      )}
    </section>
  );
};

export default Timeline;
