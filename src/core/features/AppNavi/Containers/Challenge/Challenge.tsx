import React from "react";
import AnimationOnScroll, {
  AnimationNames,
} from "../../../../utils/AnimationOnScroll/AnimationOnScroll";
import styles from "./challenge.module.scss";

const Challenge: React.FunctionComponent = () => {
  return (
    <section className={styles.challengeWrapper}>
      <div className={styles.challengeContainer}>
        <div className={styles.challengeContent}>
          <img
            src="/images/projects/AppNavi/decor-curcle.svg"
            alt="Decor O"
            className={styles.decorO}
          />
          <AnimationOnScroll
            animationName={AnimationNames.fadeInUp}
            duration={1}
          >
            <h3 className="appNaviH3">Challenge</h3>
          </AnimationOnScroll>
          <AnimationOnScroll
            animationName={AnimationNames.fadeInUp}
            duration={1}
            delay={0.25}
          >
            <p className="appNaviParagraph mb-30">
              Apart from implementing new intuitively clear user flows, the
              front-end challenge was to be able to track user's actions in the
              tool they are learning and suggest next possible steps, leading
              the pre-planned route.
            </p>
          </AnimationOnScroll>
          <AnimationOnScroll
            animationName={AnimationNames.fadeInUp}
            duration={1}
            delay={0.5}
          >
            <p className="appNaviParagraph appNaviTopParagraph mb-30">
              On the Back-end the challenge was to create a modular system for
              route storing that can be edited and expanded.
            </p>
          </AnimationOnScroll>
        </div>
        <img
          src="/images/projects/AppNavi/arrow.svg"
          alt="Decor Arrow"
          className={styles.decorArrow}
        />
      </div>
      <div className={styles.challengeImgWrapper}>
        <img
          src="/images/projects/AppNavi/analysis-layout.png"
          alt="Analysis Layout"
        />
      </div>
    </section>
  );
};

export default Challenge;
