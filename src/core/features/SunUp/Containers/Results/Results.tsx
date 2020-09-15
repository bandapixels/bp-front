import React, { useEffect, useState } from "react";
import styles from "./results.module.scss";

const Results: React.FunctionComponent = () => {
  const [isMobile, setIsMobile] = useState(false);

  const handleIsMobile = (): void => {
    setIsMobile(window.innerWidth < 669);
  };

  useEffect(() => {
    handleIsMobile();
  }, []);

  return (
    <section className={styles.sunUpResults}>
      <div className={styles.sunUpResultsImage}>
        {isMobile ? (
          <img
            src="/images/projects/SunUp/mobile/results-interface.png"
            alt="SunUp Results"
          />
        ) : (
          <img src="/images/projects/SunUp/results.png" alt="SunUp Results" />
        )}
      </div>
      <div className={styles.sunUpResultsInfo}>
        <h3>Results</h3>
        <p>
          Solar Roof is comparable in price to a typical roof with solar panels.
          Purchase SunUp Roof at one of the lowest cost-per-watt of any national
          provider and take control of your monthly electricity bill.
        </p>
      </div>
    </section>
  );
};

export default Results;
