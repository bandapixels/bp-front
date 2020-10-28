import React from "react";
import AnimationOnScroll, {
  AnimationNames
} from "../../../../utils/AnimationOnScroll/AnimationOnScroll";
import styles from "./challenge.module.scss";

const Challenge: React.FunctionComponent = () => {
  return (
    <section className={styles.sunUpChallenge}>
      <div className={styles.sunUpChallengeWrapper}>
        <div className={styles.sunUpChallengeInfo}>
          <AnimationOnScroll
            animationName={AnimationNames.fadeInUp}
            duration={1}
          >
            <h3>Challenge</h3>
          </AnimationOnScroll>
          <AnimationOnScroll
            animationName={AnimationNames.fadeInUp}
            duration={1}
            delay={0.5}
          >
            <p>
              Solar Roof is comparable in price to a typical roof with solar
              panels. Purchase SunUp Roof at one of the lowest cost-per-watt of
              any national provider and take control of your monthly electricity
              bill.
            </p>
          </AnimationOnScroll>
        </div>
        <div className={styles.sunUpChallengeList}>
          <div className={styles.sunUpChallengeItem}>
            <AnimationOnScroll
              animationName={AnimationNames.zoomIn}
              duration={0.6}
            >
              <div className={styles.sunUpChallengeCircle} />
            </AnimationOnScroll>
            <AnimationOnScroll
              animationName={AnimationNames.fadeInRight}
              duration={0.6}
              delay={0.8}
            >
              <div className={styles.sunUpChallengeText}>
                <p>
                  Roof is comparable in price to a typical roof with solar
                  panels.
                </p>
              </div>
            </AnimationOnScroll>
          </div>
          <div className={styles.sunUpChallengeItem}>
            <AnimationOnScroll
              animationName={AnimationNames.zoomIn}
              duration={0.6}
              delay={0.2}
            >
              <div className={styles.sunUpChallengeCircle} />
            </AnimationOnScroll>
            <AnimationOnScroll
              animationName={AnimationNames.fadeInRight}
              duration={0.6}
              delay={1}
            >
              <div className={styles.sunUpChallengeText}>
                <p>
                  Solar Roof is comparable in price to a typical roof with
                  panels.
                </p>
              </div>
            </AnimationOnScroll>
          </div>
          <div className={styles.sunUpChallengeItem}>
            <AnimationOnScroll
              animationName={AnimationNames.zoomIn}
              duration={0.6}
              delay={0.8}
            >
              <div className={styles.sunUpChallengeCircle} />
            </AnimationOnScroll>
            <AnimationOnScroll
              animationName={AnimationNames.fadeInRight}
              duration={0.6}
              delay={1.2}
            >
              <div className={styles.sunUpChallengeText}>
                <p>
                  Solar Roof is comparable in price to a typical roof with solar
                  panels.
                </p>
              </div>
            </AnimationOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Challenge;
