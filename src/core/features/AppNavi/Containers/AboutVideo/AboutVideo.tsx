import React from "react";
import styles from "./aboutVideo.module.scss";

const AboutVideo: React.FunctionComponent = () => {
  return (
    <section className={styles.aboutVideo}>
      <div className={styles.aboutVideoWrapper}>
        <video controls>
          <source
            src="/videos/projects/appNavi/AppNavi_En+5_final.mp4"
            type="video/mp4"
          />
        </video>
      </div>
    </section>
  );
};

export default AboutVideo;
