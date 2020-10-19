import React from "react";
import styles from "./main.module.scss";

const Main: React.FunctionComponent = () => {
  return (
    <section className={styles.shedMain}>
      <div className={styles.shedMainWrapper}>
        <div className={styles.shedMainLogo}>
          <img src="/images/projects/Shed/logo.png" alt="Shed Logo" />
          <p>A service where you can find everything you need</p>
        </div>
        <div className={styles.shedMainBig}>
          <img src="/images/projects/Shed/main-big.png" alt="Shed Logo" />
        </div>
      </div>
    </section>
  );
};

export default Main;
