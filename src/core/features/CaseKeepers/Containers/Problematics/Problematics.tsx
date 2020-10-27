import React from "react";
import useIsMobile from "../../../../utils/useIsMobile";
import styles from "./problematics.module.scss";

const Problematics: React.FunctionComponent = () => {
  const isMobile = useIsMobile();

  return (
    <section className={styles.keepersProblematics}>
      <div className={styles.keepersProblematicsWrapper}>
        <div className={styles.keepersProblematicsContent}>
          <h1>Problematics</h1>
          <p>
            Convenient and new Collaboration Suite for professionals and their
            customers. This is smart. It is fast. It is safe and
            secure.Convenient and new Collaboration Suite for professionals and
            their customers.
          </p>
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
