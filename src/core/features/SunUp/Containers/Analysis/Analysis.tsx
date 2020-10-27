import React from "react";
import useIsMobile from "../../../../utils/useIsMobile";
import styles from "./analysis.module.scss";

const Analysis: React.FunctionComponent = () => {
  const isMobile = useIsMobile();

  return (
    <section className={styles.sunUpAnalysis}>
      <div className={styles.sunUpAnalysisWrapper}>
        <div className={styles.sunUpAnalysisSteps}>
          <img
            src="/images/projects/SunUp/analysis-steps.svg"
            alt="SunUp analysis steps"
          />
        </div>
        <div className={styles.sunUpAnalysisInterface}>
          <div className={styles.sunUpAnalysisContent}>
            <h3>Analysis and solution</h3>
            <p>
              Solar Roof is comparable in price to a typical roof with solar
              panels. Purchase SunUp Roof at one of the lowest cost-per-watt of
              any national provider and take control of your monthly electricity
              bill.
            </p>
            <p>
              Solar Roof is comparable in price to a typical roof with solar
              panels. Purchase SunUp Roof at one of the lowest cost-per-watt of
              any national provider and take control of your monthly electricity
              bill.
            </p>
          </div>
          {isMobile ? (
            <div className={styles.sunUpAnalysisImages}>
              <img
                src="/images/projects/SunUp/mobile/analysis-1.png"
                alt="SunUp analysis steps"
              />
              <img
                src="/images/projects/SunUp/mobile/analysis-2.png"
                alt="SunUp analysis steps"
              />
            </div>
          ) : (
            <img
              src="/images/projects/SunUp/analysis-interface.png"
              alt="SunUp analysis steps"
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default Analysis;
