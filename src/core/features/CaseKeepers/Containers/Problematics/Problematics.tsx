import React from "react";
import styles from "./problematics.module.scss";

const Problematics: React.FunctionComponent = () => {
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
      <img
        src="/images/projects/caseKeepers/problematics.png"
        alt="CaseKeepers Problematics"
      />
    </section>
  );
};

export default Problematics;
