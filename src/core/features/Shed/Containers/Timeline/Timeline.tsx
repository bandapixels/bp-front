import React from "react";
import styles from "./timeline.module.scss";

const Timeline: React.FunctionComponent = () => {
  return (
    <section className={styles.shedTimeline}>
      <h3>Project timeline</h3>
      <div className={styles.shedTimelineWrapper}>
        <div className={styles.shedTimelineTime}>
          <img src="/images/projects/Shed/time.png" alt="Shed Time" />
        </div>
        <p>
          At all stages of the Sarai project, certain time intervals were
          determined, which amount to a total of - Total timeline.
        </p>
      </div>
      <img
        src="/images/projects/Shed/time-graphic.png"
        alt="Shed Time Graphic"
      />
    </section>
  );
};

export default Timeline;
