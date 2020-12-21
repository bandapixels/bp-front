import React from "react";
import AnimationOnScroll, {
  AnimationNames
} from "../../../../utils/AnimationOnScroll/AnimationOnScroll";
import styles from "./main.module.scss";

const Main: React.FunctionComponent = () => {
  return (
    <section className={styles.sunUpMain}>
      <div className={styles.sunUpMainWrapper}>
        <div className={styles.sunUpMainInfo}>
          <AnimationOnScroll
            duration={1}
            animationName={AnimationNames.fadeInLeft}
          >
            <div className={styles.sunUpMainLogo}>
              <img
                src="/images/projects/SunUp/main-logo.png"
                alt="SunUp Logo"
              />
            </div>
          </AnimationOnScroll>
          <AnimationOnScroll
            duration={1}
            animationName={AnimationNames.fadeInLeft}
            delay={0.5}
          >
            <p>
              SunUp is an interactive web application with 3D animations to
              automatically layout solar panels on rooftops.
            </p>
          </AnimationOnScroll>
        </div>
        <div className={styles.sunUpInterface}>
          <img
            src="/images/projects/SunUp/main-interface.png"
            alt="SunUp interface"
          />
        </div>
      </div>
    </section>
  );
};

export default Main;
