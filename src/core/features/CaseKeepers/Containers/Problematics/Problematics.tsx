import React from "react";
import useIsMobile from "../../../../utils/useIsMobile";
import AnimationOnScroll, {
  AnimationNames
} from "../../../../utils/AnimationOnScroll/AnimationOnScroll";
import styles from "./problematics.module.scss";

const Problematics: React.FunctionComponent = () => {
  const isMobile = useIsMobile();

  return (
    <section className={styles.keepersProblematics}>
      <div className={styles.keepersProblematicsWrapper}>
        <div className={styles.keepersProblematicsContent}>
          <AnimationOnScroll
            animationName={AnimationNames.fadeInUp}
            duration={1}
          >
            <h1>Problematics</h1>
          </AnimationOnScroll>
          <AnimationOnScroll
            animationName={AnimationNames.fadeInUp}
            duration={1}
            delay={0.5}
          >
            <p>
              Convenient and new Collaboration Suite for professionals and their
              customers. This is smart. It is fast. It is safe and
              secure.Convenient and new Collaboration Suite for professionals
              and their customers.
            </p>
          </AnimationOnScroll>
        </div>
      </div>
      {isMobile ? (
        <div className={styles.keepersProblematicsImageWrapper}>
          <img
            src="/images/projects/caseKeepers/problematics-1.png"
            alt="CaseKeepers Problematics"
          />
          <img
            src="/images/projects/caseKeepers/problematics-2.png"
            alt="CaseKeepers Problematics"
          />
        </div>
      ) : (
        <img
          src="/images/projects/caseKeepers/problematics.png"
          alt="CaseKeepers Problematics"
        />
      )}
    </section>
  );
};

export default Problematics;
