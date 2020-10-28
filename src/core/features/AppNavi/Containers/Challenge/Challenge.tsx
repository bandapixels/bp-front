import React from "react";
import AnimationOnScroll, {
  AnimationNames
} from "../../../../utils/AnimationOnScroll/AnimationOnScroll";
import styles from "./challenge.module.scss";

const Challenge: React.FunctionComponent = () => {
  return (
    <section className={styles.challengeWrapper}>
      <div className={styles.challengeContainer}>
        <div className={styles.challengeContent}>
          <AnimationOnScroll
            animationName={AnimationNames.fadeInUp}
            duration={1}
          >
            <h3 className="appNaviH3">Challenge</h3>
          </AnimationOnScroll>
          <AnimationOnScroll
            animationName={AnimationNames.fadeInUp}
            duration={1}
            delay={0.5}
          >
            <p className="appNaviParagraph mb-30">
              <span className="blueText">AppNavi</span> is a completely new idea
              in the market and in the training field, meaning that companies
              have not yet had to work with it. Our task was to develop so
              convenient and intuitive UX that no questions would arise of how
              to use it and that all user flows would be as fast and clear as
              possible.
            </p>
          </AnimationOnScroll>
          <AnimationOnScroll
            animationName={AnimationNames.fadeInUp}
            duration={1}
            delay={1}
          >
            <p className="appNaviParagraph">
              The UI part, on the other hand, was supposed to ensure an easy
              comprehension when integrated into absolutely any software. It was
              also necessary to make it convenient for administrators to create
              new scripts for training materials for new programs.
            </p>
          </AnimationOnScroll>
        </div>
        <img
          src="/images/projects/AppNavi/arrow.svg"
          alt="Decor Arrow"
          className={styles.decorArrow}
        />
      </div>
      <img
        src="/images/projects/AppNavi/decor-challenge.png"
        alt="Decor Challenge"
        className={styles.decorChallenge}
      />
    </section>
  );
};

export default Challenge;
