import React from "react";
import styles from "./timeline.module.scss";

const Timeline: React.FunctionComponent = () => {
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
      <img
        src="/images/projects/caseKeepers/timeline.png"
        alt="CaseKeepers Timeline"
      />
    </section>
  );
};

export default Timeline;
