import React from "react";
import styles from "./aboutVideo.module.scss";

const AboutVideo: React.FunctionComponent = () => {
  return (
    <section className={styles.aboutVideo}>
      <div className={styles.aboutVideoWrapper}>
        <video controls>
          <source src="/videos/AppNavi_animate.mp4" type="video/webm" />
        </video>
      </div>
    </section>
  );
};

export default AboutVideo;
