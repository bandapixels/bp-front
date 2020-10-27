import React from "react";
import useIsMobile from "../../../../utils/useIsMobile";
import styles from "./main.module.scss";

const Main: React.FunctionComponent = () => {
  const isMobile = useIsMobile();

  return (
    <section className={styles.keepersMain}>
      {!isMobile ? (
        <img
          src="/images/projects/caseKeepers/main-bg.png"
          alt="CaseKeepers main background"
        />
      ) : null}
      <div className={styles.keepersMainContent}>
        <h1>CaseKeepers - Service for lawyers & their clients</h1>
        <p>
          Convenient and new Collaboration Suite
          <br />
          for professionals and their customers.
          <br />
          This is smart. It is fast. It is safe and secure
        </p>
      </div>
      <p className={styles.keepersMainText}>Web • Mobile</p>
      {isMobile ? (
        <img
          src="/images/projects/caseKeepers/main-interface.png"
          alt="CaseKeepers main background"
        />
      ) : null}
    </section>
  );
};

export default Main;
