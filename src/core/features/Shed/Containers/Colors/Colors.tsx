import React from "react";
import styles from "./colors.module.scss";

const Colors: React.FunctionComponent = () => {
  return (
    <section className={styles.shedColors}>
      <h3>Font and colors</h3>
      <p>Font family - Roboto</p>
      <div className={styles.shedColorsList}>
        <div className={styles.shedColorsItem}>
          <img src="/images/projects/Shed/color-1.png" alt="Shed Color" />
        </div>
        <div className={styles.shedColorsItem}>
          <img src="/images/projects/Shed/color-2.png" alt="Shed Color" />
        </div>
        <div className={styles.shedColorsItem}>
          <img src="/images/projects/Shed/color-3.png" alt="Shed Color" />
        </div>
        <div className={styles.shedColorsItem}>
          <img src="/images/projects/Shed/color-4.png" alt="Shed Color" />
        </div>
        <div className={styles.shedColorsItem}>
          <img src="/images/projects/Shed/color-5.png" alt="Shed Color" />
        </div>
        <div className={styles.shedColorsItem}>
          <img src="/images/projects/Shed/color-6.png" alt="Shed Color" />
        </div>
        <div className={styles.shedColorsItem}>
          <img src="/images/projects/Shed/color-7.png" alt="Shed Color" />
        </div>
        <div className={styles.shedColorsItem}>
          <img src="/images/projects/Shed/color-8.png" alt="Shed Color" />
        </div>
      </div>
    </section>
  );
};

export default Colors;
