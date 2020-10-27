import React from "react";
import useIsMobile from "../../../../utils/useIsMobile";
import styles from "./research.module.scss";

const Research: React.FunctionComponent = () => {
  const isMobile = useIsMobile();

  return (
    <section className={styles.keepersResearch}>
      <div className={styles.keepersWrapper}>
        <h1>Research & Prototypes</h1>
        <div className={styles.keepersInfoRow}>
          <div className={styles.keepersInfoCol}>
            <p className={styles.keepersInfoNumber}>26</p>
            <p className={styles.keepersInfoText}>
              Studied sites, applications of competitors
            </p>
          </div>
          <div className={styles.keepersInfoCol}>
            <p className={styles.keepersInfoNumber}>16</p>
            <p className={styles.keepersInfoText}>
              Created theories to optimize processes
            </p>
          </div>
          <div className={styles.keepersInfoCol}>
            <p className={styles.keepersInfoNumber}>34</p>
            <p className={styles.keepersInfoText}>
              Creating screens of desktop prototypes and applications
            </p>
          </div>
        </div>
      </div>
      {isMobile ? (
        <div className={styles.keepersResearchImagesWrapper}>
          <img
            src="/images/projects/caseKeepers/research-1.png"
            alt="CaseKeepers Research bg"
          />
          <img
            src="/images/projects/caseKeepers/research-2.png"
            alt="CaseKeepers Research bg"
          />
          <img
            src="/images/projects/caseKeepers/research-3.png"
            alt="CaseKeepers Research bg"
          />
          <img
            src="/images/projects/caseKeepers/research-4.png"
            alt="CaseKeepers Research bg"
          />
          <img
            src="/images/projects/caseKeepers/research-5.png"
            alt="CaseKeepers Research bg"
          />
          <img
            src="/images/projects/caseKeepers/research-6.png"
            alt="CaseKeepers Research bg"
          />
        </div>
      ) : (
        <img
          src="/images/projects/caseKeepers/research.png"
          alt="CaseKeepers Research bg"
        />
      )}

      <img
        src="/images/projects/caseKeepers/research-decor.png"
        alt="CaseKeepers decor"
        className={styles.keepersResearchDecor}
      />
    </section>
  );
};

export default Research;
