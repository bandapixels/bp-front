import React from "react";
import useIsMobile from "../../../../utils/useIsMobile";
import styles from "./footer.module.scss";

const Footer: React.FunctionComponent = () => {
  const isMobile = useIsMobile();

  return (
    <section className={styles.sunUpFooter}>
      {isMobile ? (
        <>
          <img
            src="/images/projects/SunUp/mobile/footer-1.png"
            alt="SunUp footer first"
          />
          <img
            src="/images/projects/SunUp/mobile/footer-2.png"
            alt="SunUp footer second"
          />
          <img
            src="/images/projects/SunUp/mobile/footer-3.png"
            alt="SunUp footer third"
          />
          <img
            src="/images/projects/SunUp/mobile/footer-4.png"
            alt="SunUp footer fourth"
          />
          <img
            src="/images/projects/SunUp/mobile/footer-5.png"
            alt="SunUp footer fifth"
          />
        </>
      ) : (
        <img src="/images/projects/SunUp/footer-image.png" alt="SunUp footer" />
      )}
    </section>
  );
};

export default Footer;
