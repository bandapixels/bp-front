import React from "react";
import styles from "./colors.module.scss";

const Colors: React.FunctionComponent = () => {
  return (
    <section className={styles.shedColors}>
      <h3>Font and colors</h3>
      <p>Font family - Roboto</p>
      <div className={styles.shedColorsList}>
        <div className={styles.shedColorsItem}>
          <div className={styles.shedColorWrapper1}>
            <img src="/images/projects/Shed/color-1.png" alt="Shed Color" />
          </div>
          <p>#01454F</p>
        </div>
        <div className={styles.shedColorsItem}>
          <div className={styles.shedColorWrapper2}>
            <img src="/images/projects/Shed/color-2-b.png" alt="Shed Color" />
          </div>
          <p>#8cd50b</p>
        </div>
        <div className={styles.shedColorsItem}>
          <div className={styles.shedColorWrapper3}>
            <img src="/images/projects/Shed/color-3.png" alt="Shed Color" />
          </div>
          <p>#000000</p>
        </div>
        <div className={styles.shedColorsItem}>
          <div className={styles.shedColorWrapper4}>
            <img src="/images/projects/Shed/color-4.png" alt="Shed Color" />
          </div>
          <p>#8A8A8A</p>
        </div>
        <div className={styles.shedColorsItem}>
          <div className={styles.shedColorWrapper5}>
            <img src="/images/projects/Shed/color-5.png" alt="Shed Color" />
          </div>
          <p>#F3F5F6</p>
        </div>
        <div className={styles.shedColorsItem}>
          <div className={styles.shedColorWrapper6}>
            <img src="/images/projects/Shed/color-6.png" alt="Shed Color" />
          </div>
          <p>#2F80ED</p>
        </div>
        <div className={styles.shedColorsItem}>
          <div className={styles.shedColorWrapper7}>
            <img src="/images/projects/Shed/color-7.png" alt="Shed Color" />
          </div>
          <p>#EB5757</p>
        </div>
        <div className={styles.shedColorsItem}>
          <div className={styles.shedColorWrapper8}>
            <img src="/images/projects/Shed/color-8.png" alt="Shed Color" />
          </div>
          <p>#EB5757</p>
        </div>
      </div>
    </section>
  );
};

export default Colors;
