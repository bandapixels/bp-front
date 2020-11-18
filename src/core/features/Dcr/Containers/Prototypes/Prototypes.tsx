import React from "react";
import useIsMobile from "../../../../utils/useIsMobile";
import AnimationOnScroll, {
  AnimationNames
} from "../../../../utils/AnimationOnScroll/AnimationOnScroll";
import styles from "./prototypes.module.scss";

const Prototypes: React.FunctionComponent = () => {
  const isMobile = useIsMobile();

  return (
    <section className={styles.dcrPrototypes}>
      <div className={styles.dcrPrototypesWrapper}>
        <img
          src="/images/projects/dcr/wireframe.png"
          className={styles.dcrPrototypesWireframeImage}
          alt="wireframe"
        />
        <img
          src="/images/projects/dcr/prototypes-map.png"
          className={styles.dcrPrototypesMap}
          alt="prototypes map"
        />
        <div className={styles.dcrPrototypesTextWrapper}>
          <AnimationOnScroll
            animationName={AnimationNames.fadeInUp}
            duration={1}
          >
            <h3>Prototypes</h3>
          </AnimationOnScroll>
          <div className={styles.dcrPrototypesText}>
            <div>
              <p>
                <AnimationOnScroll
                  animationName={AnimationNames.fadeInUp}
                  duration={1}
                  as="span"
                  delay={0.5}
                >
                  Prototyping allowed us to speed up the entire design process,
                  see the whole picture of the application, and also use the
                  project budget in a more rational way.
                </AnimationOnScroll>
              </p>
              <p>
                <AnimationOnScroll
                  animationName={AnimationNames.fadeInUp}
                  duration={1}
                  as="span"
                  delay={0.7}
                >
                  Based on the analysis, we arranged the elements and blocks on
                  the portal in a different way, resorting to minimal changes on
                  the site so as not to complicate further user interaction with
                  the service.
                </AnimationOnScroll>
              </p>
            </div>
            <div>
              <p>
                <AnimationOnScroll
                  animationName={AnimationNames.fadeInUp}
                  duration={1}
                  as="span"
                  delay={0.9}
                >
                  Due to the prototype, the client was able to see the changes
                  and evaluate new capabilities of his product. In addition, we
                  have come up with some new useful user scripts.
                </AnimationOnScroll>
              </p>
              <p>
                <AnimationOnScroll
                  animationName={AnimationNames.fadeInUp}
                  duration={1}
                  as="span"
                  delay={1.1}
                >
                  Thus, we have managed to significantly improve the usability
                  of the DCR Solutions portal.
                </AnimationOnScroll>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.dcrPrototypesImagesWrapper}>
        {isMobile ? (
          <>
            <img
              src="/images/projects/dcr/prototypes-1-mobile.png"
              alt="prototypes layouts"
            />
            <img
              src="/images/projects/dcr/prototypes-2-mobile.png"
              alt="prototypes layouts"
            />
            <img
              src="/images/projects/dcr/prototypes-3-mobile.png"
              alt="prototypes layouts"
            />
            <img
              src="/images/projects/dcr/prototypes-4-mobile.png"
              alt="prototypes layouts"
            />
            <p>20+ экранов</p>
          </>
        ) : (
          <img
            src="/images/projects/dcr/prototypes-images.png"
            alt="prototypes layouts"
          />
        )}
      </div>
    </section>
  );
};

export default Prototypes;
