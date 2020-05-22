import React from "react";
import styles from "./analysisAndSolution.module.scss";

const AnalysisAndSolution: React.FunctionComponent = () => {
  return (
    <section className={styles.analysisWrapper}>
      <div className={styles.analysisContainer}>
        <h3>Analysis and solution</h3>
        <h4>For the UX analysis, we took the following steps:</h4>
        <div className={styles.analysisSteps}>
          <div className={styles.analysisStep}>
            <img src="/images/projects/AppNavi/step-4.svg" alt="step 1" />
            <p>studied the idea of the application</p>
          </div>
          <div className={styles.analysisStep}>
            <img src="/images/projects/AppNavi/step-5.svg" alt="step 2" />
            <p>studied technical requirements and existing style guides</p>
          </div>
          <div className={styles.analysisStep}>
            <img src="/images/projects/AppNavi/step-6.svg" alt="step 3" />
            <p>studied the main user flows and tested them on a focus group</p>
          </div>
          <div className={styles.analysisStep}>
            <img src="/images/projects/AppNavi/step-4.svg" alt="step 4" />
            <p>requested and studied customer reviews</p>
          </div>
          <div className={styles.analysisStep}>
            <img src="/images/projects/AppNavi/step-5.svg" alt="step 5" />
            <p>
              requested several video recordings of how clients' new employees
              use the application
            </p>
          </div>
          <div className={styles.analysisStep}>
            <img src="/images/projects/AppNavi/step-6.svg" alt="step 6" />
            <p>
              studied the user flow for the administrator who created new
              instructions for learning new programs and functions
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnalysisAndSolution;
