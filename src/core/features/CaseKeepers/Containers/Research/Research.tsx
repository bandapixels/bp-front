import React from "react";
import styles from "./research.module.scss";

const Research: React.FunctionComponent = () => {
  return (
    <section className={styles.keepersResearch}>
      <div className={styles.keepersWrapper}>
        <h1>Research & Prototypes</h1>
        <div className={styles.keepersInfoRow}>
          <div className={styles.keepersInfoCol}>
            <p className={styles.keepersInfoNumber}>26</p>
            <p className={styles.keepersInfoText}>
              Studied sites, applications of competitors
            </p>
          </div>
          <div className={styles.keepersInfoCol}>
            <p className={styles.keepersInfoNumber}>16</p>
            <p className={styles.keepersInfoText}>
              Created theories to optimize processes
            </p>
          </div>
          <div className={styles.keepersInfoCol}>
            <p className={styles.keepersInfoNumber}>34</p>
            <p className={styles.keepersInfoText}>
              Creating screens of desktop prototypes and applications
            </p>
          </div>
        </div>
      </div>
      <img
        src="/images/projects/caseKeepers/research.png"
        alt="CaseKeepers Research bg"
      />
      <img
        src="/images/projects/caseKeepers/research-decor.png"
        alt="CaseKeepers decor"
        className={styles.keepersResearchDecor}
      />
    </section>
  );
};

export default Research;
