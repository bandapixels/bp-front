import React from "react";
import styles from "./analysisAndSolution.module.scss";

const AnalysisAndSolution: React.FunctionComponent = () => {
  return (
    <section className={styles.analysisWrapper}>
      <div className={styles.analysisContainer}>
        <h3 className="appNaviH3">Analysis and solution</h3>
        <h4 className="appNaviH4">
          For the UX analysis, we took the following steps:
        </h4>
        <div className={styles.analysisStepsText}>
          <p className="appNaviParagraph">
            The purpose of AppNavi is to provide assistance, to help you quickly
            and easily understand the issue of interest, to train, excluding
            painful and tedious explanations, and not to cause stress and
            irritation.
          </p>
        </div>
        <div className={styles.analysisSteps}>
          <div className={styles.analysisStep}>
            <img src="/images/projects/AppNavi/step-1.svg" alt="step 1" />
            <img
              src="/images/projects/AppNavi/step-1-mob.svg"
              alt="step 1"
              className={styles.mobSteps}
            />
            <p>studied the idea of the application</p>
          </div>
          <div className={styles.analysisStep}>
            <img src="/images/projects/AppNavi/step-2.svg" alt="step 2" />
            <img
              src="/images/projects/AppNavi/step-2-mob.svg"
              alt="step 2"
              className={styles.mobSteps}
            />
            <p>studied technical requirements and existing style guides</p>
          </div>
          <div className={styles.analysisStep}>
            <img src="/images/projects/AppNavi/step-3.svg" alt="step 3" />
            <img
              src="/images/projects/AppNavi/step-3-mob.svg"
              alt="step 3"
              className={styles.mobSteps}
            />
            <p>studied the main user flows and tested them on a focus group</p>
          </div>
          <div className={styles.analysisStep}>
            <img src="/images/projects/AppNavi/step-4.svg" alt="step 4" />
            <img
              src="/images/projects/AppNavi/step-4-mob.svg"
              alt="step 4"
              className={styles.mobSteps}
            />
            <p>requested and studied customer reviews</p>
          </div>
          <div className={styles.analysisStep}>
            <img src="/images/projects/AppNavi/step-5.svg" alt="step 5" />
            <img
              src="/images/projects/AppNavi/step-5-mob.svg"
              alt="step 5"
              className={styles.mobSteps}
            />
            <p className={styles.hideInMob}>
              requested several video recordings of how clients' new employees
              use the application
            </p>
            <p className={styles.showInMob}>
              requested videos of how new users use the app
            </p>
          </div>
          <div className={styles.analysisStep}>
            <img src="/images/projects/AppNavi/step-6.svg" alt="step 6" />
            <img
              src="/images/projects/AppNavi/step-6-mob.svg"
              alt="step 6"
              className={styles.mobSteps}
            />
            <p className={styles.hideInMob}>
              studied the user flow for the administrator who created new
              instructions for learning new programs and functions
            </p>
            <p className={styles.showInMob}>
              studied userflow to create instructions for learning new programs
            </p>
          </div>
          <img
            src="/images/projects/AppNavi/top-line.svg"
            className={styles.topLine}
            alt="Line"
          />
          <img
            src="/images/projects/AppNavi/bottom-line.svg"
            className={styles.bottomLine}
            alt="Line"
          />
          <img
            src="/images/projects/AppNavi/mob-line.svg"
            className={styles.mobLine}
            alt="line"
          />
        </div>
      </div>
    </section>
  );
};

export default AnalysisAndSolution;
