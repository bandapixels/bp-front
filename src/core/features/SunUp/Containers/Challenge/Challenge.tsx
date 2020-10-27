import React from "react";
import styles from "./challenge.module.scss";

const Challenge: React.FunctionComponent = () => {
  return (
    <section className={styles.sunUpChallenge}>
      <div className={styles.sunUpChallengeWrapper}>
        <div className={styles.sunUpChallengeInfo}>
          <h3>Challenge</h3>
          <p>
            Solar Roof is comparable in price to a typical roof with solar
            panels. Purchase SunUp Roof at one of the lowest cost-per-watt of
            any national provider and take control of your monthly electricity
            bill.
          </p>
        </div>
        <div className={styles.sunUpChallengeList}>
          <div className={styles.sunUpChallengeItem}>
            <div className={styles.sunUpChallengeCircle} />
            <div className={styles.sunUpChallengeText}>
              <p>
                Roof is comparable in price to a typical roof with solar panels.
              </p>
            </div>
          </div>
          <div className={styles.sunUpChallengeItem}>
            <div className={styles.sunUpChallengeCircle} />
            <div className={styles.sunUpChallengeText}>
              <p>
                Solar Roof is comparable in price to a typical roof with panels.
              </p>
            </div>
          </div>
          <div className={styles.sunUpChallengeItem}>
            <div className={styles.sunUpChallengeCircle} />
            <div className={styles.sunUpChallengeText}>
              <p>
                Solar Roof is comparable in price to a typical roof with solar
                panels.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Challenge;
