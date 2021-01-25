import React from "react";
import styles from "./footer.module.scss";

const Footer: React.FunctionComponent = () => {
  return (
    <footer className={styles.shedFooter}>
      <div className={styles.shedFooterWrapper}>
        <img src="/images/projects/Shed/footer.png" alt="Shed DesignPage" />
        <div className={styles.footerContent}>
          <p>
            Thank you
            <br />
            for watching!
          </p>
          <div className={styles.footerLogo}>
            <img
              src="/images/projects/Shed/logo.png"
              alt="Shed DesignPage Logo"
            />
          </div>
        </div>
        <div className={styles.shedFooterCircles}>
          <img src="/images/projects/Shed/circles.png" alt="Shed Circles" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
