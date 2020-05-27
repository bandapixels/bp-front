import React from "react";
import styles from "./analysisVideo.module.scss";

const AnalysisVideo: React.FunctionComponent = () => {
  return (
    <section className={styles.analysisVideoWrapper}>
      <div className={styles.analysisVideoContainer}>
        <img src="/videos/projects/appNavi/B&W.gif" alt="video" />
      </div>
    </section>
  );
};

export default AnalysisVideo;
