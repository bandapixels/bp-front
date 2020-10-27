import React from "react";
import styles from "./main.module.scss";

const Main: React.FunctionComponent = () => {
  return (
    <section className={styles.sunUpMain}>
      <div className={styles.sunUpMainWrapper}>
        <div className={styles.sunUpMainInfo}>
          <div className={styles.sunUpMainLogo}>
            <img src="/images/projects/SunUp/main-logo.png" alt="SunUp Logo" />
          </div>
          <p>
            Solar Roof is comparable in price to a typical roof with solar
            panels. Purchase SunUp Roof at one of the lowest cost-per-watt of
            any national provider
          </p>
        </div>
        <div className={styles.sunUpInterface}>
          <img
            src="/images/projects/SunUp/main-interface.png"
            alt="SunUp interface"
          />
        </div>
      </div>
    </section>
  );
};

export default Main;
