import React from "react";
import styles from "./challenge.module.scss";

const Challenge: React.FunctionComponent = () => {
  return (
    <section className={styles.keepersChallenge}>
      <div className={styles.keepersChallengeWrapper}>
        <div className={styles.keepersChallengeContent}>
          <h1>Challenge</h1>
          <p>
            Convenient and new Collaboration Suite for professionals and their
            customers. This is smart. It is fast. It is safe and
            secure.Convenient and new
          </p>
        </div>
      </div>
      <img
        src="/images/projects/caseKeepers/challenge.png"
        alt="CaseKeepers Challenge"
      />
      <img
        src="/images/projects/caseKeepers/challenge-decor.png"
        alt="CaseKeepers decor"
        className={styles.keepersChallengeDecor}
      />
    </section>
  );
};

export default Challenge;
