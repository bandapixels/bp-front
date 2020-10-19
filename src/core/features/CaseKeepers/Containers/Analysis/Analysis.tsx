import React from "react";
import styles from "./analysis.module.scss";

const Analysis: React.FunctionComponent = () => {
  return (
    <section className={styles.keepersAnalysis}>
      <div className={styles.keepersAnalysisWrapper}>
        <h3>Analysis and solution</h3>
        <div className={styles.keepersAnalysisContent}>
          <div className={styles.keepersAnalysisContentLeft}>
            <p>
              Convenient and new Collaboration Suite for professionals and their
              customers. This is smart. It is fast. It is safe and secure.
              Convenient and new Collaboration Suite for professionals and their
              customers
            </p>
            <img
              src="/images/projects/caseKeepers/analysis-1.png"
              alt="CaseKeepers "
            />
            <p>
              Convenient and new Collaboration Suite for professionals and their
              customers. This is smart. It is fast. It is safe and secure.
              Convenient and new Collaboration Suite for professionals and their
              customers
            </p>
          </div>
          <div className={styles.keepersAnalysisContentRight}>
            <img
              src="/images/projects/caseKeepers/analysis-2.png"
              alt="CaseKeepers "
            />
            <img
              src="/images/projects/caseKeepers/analysis-3.png"
              alt="CaseKeepers "
            />
          </div>
        </div>
        <img
          src="/images/projects/caseKeepers/analysis-4.png"
          alt="CaseKeepers "
          className={styles.keepersAnalysisMessage}
        />
      </div>
      <div className={styles.keepersAnalysisLogin}>
        <div>
          <img
            src="/images/projects/caseKeepers/analysis-5.png"
            alt="CaseKeepers "
          />
        </div>
        <div>
          <p>
            Convenient and new Collaboration Suite for professionals and their
            customers. This is smart. It is fast
          </p>
          <img
            src="/images/projects/caseKeepers/analysis-6.png"
            alt="CaseKeepers "
          />
          <img
            src="/images/projects/caseKeepers/analysis-7.png"
            alt="CaseKeepers "
            className={styles.keepersAnalysisRegister}
          />
        </div>
      </div>
      <img
        src="/images/projects/caseKeepers/analysis-decor.png"
        alt="CaseKeepers decor"
        className={styles.keepersAnalysisDecor1}
      />
      <img
        src="/images/projects/caseKeepers/analysis-decor-1.png"
        alt="CaseKeepers decor"
        className={styles.keepersAnalysisDecor2}
      />
      <img
        src="/images/projects/caseKeepers/analysis-decor-2.png"
        alt="CaseKeepers decor"
        className={styles.keepersAnalysisDecor3}
      />
    </section>
  );
};

export default Analysis;
