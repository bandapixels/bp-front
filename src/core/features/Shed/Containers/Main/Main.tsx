import React from "react";
import styles from "./main.module.scss";

const Main: React.FunctionComponent = () => {
  return (
    <section className={styles.shredMain}>
      <div className={styles.shredMainWrapper}>
        <div className={styles.shredMainLogo}>
          <img src="/images/projects/Shred/logo.png" alt="Shed Logo" />
          <p>A service where you can find everything you need</p>
        </div>
        <div className={styles.shredMainBig}>
          <img src="/images/projects/Shred/main-big.png" alt="Shed Logo" />
        </div>
      </div>
    </section>
  );
};

export default Main;
