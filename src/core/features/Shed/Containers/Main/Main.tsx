import React from "react";
import useIsMobile from "../../../../utils/useIsMobile";
import AnimationOnScroll, {
  AnimationNames
} from "../../../../utils/AnimationOnScroll/AnimationOnScroll";
import styles from "./main.module.scss";

const Main: React.FunctionComponent = () => {
  const isMobile = useIsMobile();

  return (
    <section className={styles.shedMain}>
      <div className={styles.shedMainWrapper}>
        <div className={styles.shedMainLogo}>
          <AnimationOnScroll
            animationName={AnimationNames.fadeInUp}
            duration={1}
          >
            <img src="/images/projects/Shed/logo.png" alt="Shed Logo" />
          </AnimationOnScroll>
          <AnimationOnScroll
            animationName={AnimationNames.fadeInUp}
            duration={1}
            delay={0.5}
          >
            <p>A service where you can find everything you need</p>
          </AnimationOnScroll>
        </div>
        <div className={styles.shedMainBig}>
          <img
            src={
              isMobile
                ? "/images/projects/Shed/main-big-mobile.png"
                : "/images/projects/Shed/main-big.png"
            }
            alt="Shed Logo"
          />
        </div>
      </div>
    </section>
  );
};

export default Main;
