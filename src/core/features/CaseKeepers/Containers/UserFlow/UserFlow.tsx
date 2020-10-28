import React from "react";
import useIsMobile from "../../../../utils/useIsMobile";
import AnimationOnScroll, {
  AnimationNames
} from "../../../../utils/AnimationOnScroll/AnimationOnScroll";
import styles from "./userFlow.module.scss";

const UserFlow: React.FunctionComponent = () => {
  const isMobile = useIsMobile();

  return (
    <section className={styles.keepersUserFlow}>
      <div className={styles.keepersUserFlowWrapper}>
        <AnimationOnScroll animationName={AnimationNames.fadeInUp} duration={1}>
          <h1>User flow</h1>
        </AnimationOnScroll>
        <AnimationOnScroll
          animationName={AnimationNames.fadeInUp}
          duration={1}
          delay={0.5}
        >
          <p>
            Convenient and new Collaboration Suite for professionals and their
            customers.
          </p>
        </AnimationOnScroll>
      </div>
      <img
        src={
          isMobile
            ? "/images/projects/caseKeepers/userflow-schema-mobile.png"
            : "/images/projects/caseKeepers/userflow-schema.png"
        }
        alt="CaseKeepers schema"
      />
      <img
        src="/images/projects/caseKeepers/userflow-decor-left.png"
        alt="CaseKeepers decor"
        className={styles.keepersUserFlowDecor1}
      />
      <img
        src="/images/projects/caseKeepers/userflow-decor-right.png"
        alt="CaseKeepers decor"
        className={styles.keepersUserFlowDecor2}
      />
      <img
        src="/images/projects/caseKeepers/userflow-decor-right-2.png"
        alt="CaseKeepers decor"
        className={styles.keepersUserFlowDecor3}
      />
    </section>
  );
};

export default UserFlow;
