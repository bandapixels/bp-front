import React from "react";
import styles from "./footer.module.scss";

const Footer: React.FunctionComponent = () => {
  return (
    <footer className={styles.keepersFooter}>
      <div className={styles.keepersFooterContent}>
        <h3>Results</h3>
        <p>
          Convenient and new Collaboration Suite for professionals and their
          customers. This is smart. It is fast. It is safe and secure.Convenient
          and new Collaboration Suite for professionals and their customers.
          This is smart
        </p>
      </div>
      <img
        src="/images/projects/caseKeepers/footer.png"
        alt="CaseKeepers footer"
      />
      <img
        src="/images/projects/caseKeepers/footer-decor.png"
        alt="CaseKeepers decor"
        className={styles.keepersFooterDecor}
      />
    </footer>
  );
};

export default Footer;
