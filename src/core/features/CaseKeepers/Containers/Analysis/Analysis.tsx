import React from "react";
import useIsMobile from "../../../../utils/useIsMobile";
import styles from "./analysis.module.scss";
import AnimationOnScroll, {
  AnimationNames
} from "../../../../utils/AnimationOnScroll/AnimationOnScroll";

const Analysis: React.FunctionComponent = () => {
  const isMobile = useIsMobile();

  return (
    <section className={styles.keepersAnalysis}>
      <div className={styles.keepersAnalysisWrapper}>
        <AnimationOnScroll animationName={AnimationNames.fadeInUp} duration={1}>
          <h3>Analysis and solution</h3>
        </AnimationOnScroll>
        <div className={styles.keepersAnalysisContent}>
          <div className={styles.keepersAnalysisContentLeft}>
            <AnimationOnScroll
              animationName={AnimationNames.fadeInUp}
              duration={1}
              delay={0.5}
            >
              <p>
                Convenient and new Collaboration Suite for professionals and
                their customers. This is smart. It is fast. It is safe and
                secure. Convenient and new Collaboration Suite for professionals
                and their customers
              </p>
            </AnimationOnScroll>
            <img
              src={`/images/projects/caseKeepers/analysis-1${
                isMobile ? "-mobile" : ""
              }.png`}
              alt="CaseKeepers"
            />
            <AnimationOnScroll
              animationName={AnimationNames.fadeInUp}
              duration={1}
              delay={0.2}
            >
              <p>
                Convenient and new Collaboration Suite for professionals and
                their customers. This is smart. It is fast. It is safe and
                secure. Convenient and new Collaboration Suite for professionals
                and their customers
              </p>
            </AnimationOnScroll>
          </div>
          <div className={styles.keepersAnalysisContentRight}>
            <img
              src="/images/projects/caseKeepers/analysis-2.png"
              alt="CaseKeepers "
            />
            <img
              src="/images/projects/caseKeepers/analysis-3.png"
              alt="CaseKeepers "
            />
          </div>
        </div>
        <img
          src={`/images/projects/caseKeepers/analysis-4${
            isMobile ? "-mobile" : ""
          }.png`}
          alt="CaseKeepers "
          className={styles.keepersAnalysisMessage}
        />
      </div>
      <div className={styles.keepersAnalysisLogin}>
        <div>
          <img
            src={`/images/projects/caseKeepers/analysis-5${
              isMobile ? "-mobile" : ""
            }.png`}
            alt="CaseKeepers "
          />
        </div>
        <div>
          <AnimationOnScroll
            animationName={AnimationNames.fadeInUp}
            duration={1}
            delay={0.2}
          >
            <p>
              Convenient and new Collaboration Suite for professionals and their
              customers. This is smart. It is fast
            </p>
          </AnimationOnScroll>
          <img
            src={`/images/projects/caseKeepers/analysis-6${
              isMobile ? "-mobile" : ""
            }.png`}
            alt="CaseKeepers "
          />
          <img
            src={`/images/projects/caseKeepers/analysis-7${
              isMobile ? "-mobile" : ""
            }.png`}
            alt="CaseKeepers "
            className={styles.keepersAnalysisRegister}
          />
        </div>
      </div>
      <img
        src="/images/projects/caseKeepers/analysis-decor.png"
        alt="CaseKeepers decor"
        className={styles.keepersAnalysisDecor1}
      />
      <img
        src="/images/projects/caseKeepers/analysis-decor-1.png"
        alt="CaseKeepers decor"
        className={styles.keepersAnalysisDecor2}
      />
      <img
        src="/images/projects/caseKeepers/analysis-decor-2.png"
        alt="CaseKeepers decor"
        className={styles.keepersAnalysisDecor3}
      />
    </section>
  );
};

export default Analysis;
