import React from "react";
import styles from "./analysisVideo.module.scss";

const AnalysisVideo: React.FunctionComponent = () => {
  return (
    <section className={styles.analysisVideoWrapper}>
      <div className={styles.analysisVideoContainer}>
        <video controls>
          <source src="/videos/AppNavi_animate.mp4" type="video/webm" />
        </video>
        <img
          src="/images/projects/AppNavi/full-o.svg"
          alt="Decor O"
          className={styles.analysisDecor}
        />
      </div>
    </section>
  );
};

export default AnalysisVideo;
