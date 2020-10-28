import React from "react";
import useIsMobile from "../../../../utils/useIsMobile";
import styles from "./footer.module.scss";
import AnimationOnScroll, {
  AnimationNames
} from "../../../../utils/AnimationOnScroll/AnimationOnScroll";

const Footer: React.FunctionComponent = () => {
  const isMobile = useIsMobile();

  return (
    <footer className={styles.keepersFooter}>
      <div className={styles.keepersFooterContent}>
        <AnimationOnScroll animationName={AnimationNames.fadeInUp} duration={1}>
          <h3>Results</h3>
        </AnimationOnScroll>
        <AnimationOnScroll
          animationName={AnimationNames.fadeInUp}
          duration={1}
          delay={0.5}
        >
          <p>
            Convenient and new Collaboration Suite for professionals and their
            customers. This is smart. It is fast. It is safe and
            secure.Convenient and new Collaboration Suite for professionals and
            their customers. This is smart
          </p>
        </AnimationOnScroll>
      </div>
      <img
        src={`/images/projects/caseKeepers/footer${
          isMobile ? "-mobile.svg" : ".png"
        }`}
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
