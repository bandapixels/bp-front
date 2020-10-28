import React from "react";
import useIsMobile from "../../../../utils/useIsMobile";
import styles from "./challenge.module.scss";
import AnimationOnScroll, {
  AnimationNames
} from "../../../../utils/AnimationOnScroll/AnimationOnScroll";

const Challenge: React.FunctionComponent = () => {
  const isMobile = useIsMobile();

  return (
    <section className={styles.keepersChallenge}>
      <div className={styles.keepersChallengeWrapper}>
        <div className={styles.keepersChallengeContent}>
          <AnimationOnScroll
            animationName={AnimationNames.fadeInUp}
            duration={1}
          >
            <h1>Challenge</h1>
          </AnimationOnScroll>
          <AnimationOnScroll
            animationName={AnimationNames.fadeInUp}
            duration={1}
            delay={0.5}
          >
            <p>
              Convenient and new Collaboration Suite for professionals and their
              customers. This is smart. It is fast. It is safe and
              secure.Convenient and new
            </p>
          </AnimationOnScroll>
        </div>
      </div>
      {isMobile ? (
        <div className={styles.keepersChallengeImagesWrapper}>
          <img
            src="/images/projects/caseKeepers/challenge-wave.svg"
            alt="CaseKeepers Challenge"
          />
          <img
            src="/images/projects/caseKeepers/challenge-mobile.png"
            alt="CaseKeepers Challenge"
            className={styles.keepersChallengeMobile}
          />
        </div>
      ) : (
        <img
          src="/images/projects/caseKeepers/challenge.png"
          alt="CaseKeepers Challenge"
        />
      )}
      <img
        src="/images/projects/caseKeepers/challenge-decor.png"
        alt="CaseKeepers decor"
        className={styles.keepersChallengeDecor}
      />
    </section>
  );
};

export default Challenge;
