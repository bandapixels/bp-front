import React from "react";
import useIsMobile from "../../../../utils/useIsMobile";
import styles from "./userFlow.module.scss";

const UserFlow: React.FunctionComponent = () => {
  const isMobile = useIsMobile();

  return (
    <section className={styles.keepersUserFlow}>
      <div className={styles.keepersUserFlowWrapper}>
        <h1>User flow</h1>
        <p>
          Convenient and new Collaboration Suite for professionals and their
          customers.
        </p>
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
