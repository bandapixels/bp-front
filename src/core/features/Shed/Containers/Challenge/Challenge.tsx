import React from "react";
import styles from "./challenge.module.scss";

const Challenge: React.FunctionComponent = () => {
  return (
    <section className={styles.shredChallenge}>
      <h3>Challenge</h3>
      <p className={styles.shredChallengeSubtitle}>
        To create high-quality design, our team needed to solve several
        problems:
      </p>
      <ul className={styles.shredChallengeList}>
        <li>
          <span>01.</span> Creating an account for 3 user types: owners (placing
          things in a warehouse and tracking rent); renters (saving necessary
          things, reading notes and tracking the regions with; the necessary
          stuff) warehouse (tracking the movement, arrival and status of things
          to register them on the site)
        </li>
        <li>
          <span>03.</span> Creating a search engine for users that takes into
          account search filters and optimizes the search process. The flow to
          the end goal (rent) should not take much time, the search page
          includes a search box and navigation in the categories specified by
          the client.
        </li>
        <li>
          <span>02.</span> Simplicity in uploading and placing goods on the
          site, as well as accounting for the status of the rent (confirmation
          of its arrival, condition, cost). The whole scenario of product
          verification should be clear to anyone who wants to use the
          application (targeting an average person who does not have the time
          and desire to dig into complex bureaucracy)
        </li>
        <li>
          <span>04.</span> Remote quality control: the application reads the QR
          code of the goods upon arrival of the order and uploads the video with
          the order printout, which confirms the integrity and serviceability of
          the delivered goods
        </li>
      </ul>
      <div className={styles.shredChallengeSteps}>
        <div className={styles.shredChallengeStepsItem}>
          <div className={styles.shredChallengeStepsIcon}>
            <img
              src="/images/projects/Shred/user-acc.png"
              alt="Shed Problematics"
            />
          </div>
          <p>different user Accounts</p>
        </div>
      </div>
    </section>
  );
};

export default Challenge;
