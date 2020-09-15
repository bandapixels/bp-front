import React from "react";
import styles from "./problems.module.scss";

const Problems: React.FunctionComponent = () => {
  return (
    <section className={styles.sunUpProblems}>
      <div className={styles.sunUpProblemsWrapper}>
        <div className={styles.sunUpProblemsInfo}>
          <h3>Problems</h3>
          <p>
            Solar Roof is comparable in price to a typical roof with solar
            panels. Purchase SunUp Roof at one of the lowest cost-per-watt of
            any national provider and take control of your monthly electricity
            bill.
          </p>
        </div>
        <div className={styles.sunUpProblemsBlocks}>
          <div className={styles.sunUpProblemsGoogle}>
            <p>Google Maps</p>
          </div>
          <div className={styles.sunUpProblemsImport}>
            <p>Import PNG/JPG</p>
          </div>
          <div className={styles.sunUpProblemsWhiteboard}>
            <p>Whiteboard</p>
          </div>
          <div className={styles.sunUpProblemsSmall} />
          <div className={styles.sunUpProblemsMiddle} />
          <div className={styles.sunUpProblemsBig} />
        </div>
      </div>
      <div className={styles.sunUpProblemsInterface}>
        <img
          src="/images/projects/SunUp/problems-interface.png"
          alt="problems interface"
        />
      </div>
    </section>
  );
};

export default Problems;
