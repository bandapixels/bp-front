import React from "react";
import useIsMobile from "../../../../utils/useIsMobile";
import AnimationOnScroll, {
  AnimationNames
} from "../../../../utils/AnimationOnScroll/AnimationOnScroll";
import styles from "./userFlow.module.scss";

const UserFlow: React.FunctionComponent = () => {
  const isMobile = useIsMobile();

  return (
    <section className={styles.dcrUserFlow}>
      <img src="/images/projects/dcr/corner-top.png" alt="corner" />
      <div className={styles.dcrUserFlowBack}>
        <div className={styles.dcrUserFlowWrapper}>
          <img
            src="/images/projects/dcr/itinerary.png"
            alt="itinerary"
            className={styles.dcrUserFlowItinerary}
          />
          <div className={styles.dcrUserFlowText}>
            <AnimationOnScroll
              animationName={AnimationNames.fadeInUp}
              duration={1}
            >
              <h3>Юзерфлоу</h3>
            </AnimationOnScroll>
            <p>
              <AnimationOnScroll
                animationName={AnimationNames.fadeInUp}
                duration={1}
                as="span"
                delay={0.5}
              >
                Для наглядности и удобства восприятия связи между страницами и
                основными их элементами, был создан удобный User Flow
              </AnimationOnScroll>
            </p>
            <p>
              <AnimationOnScroll
                animationName={AnimationNames.fadeInUp}
                duration={1}
                as="span"
                delay={0.7}
              >
                Связь, которая отобразилась на данной схеме, ускорила процес
                восприятия и ориентации в приложени.
              </AnimationOnScroll>
            </p>
          </div>
          <div className={styles.dcrUserFlowImage}>
            <img
              src={
                isMobile
                  ? "/images/projects/dcr/user-flow-mobile.png"
                  : "/images/projects/dcr/user-flow.png"
              }
              alt="user flow"
            />
          </div>
        </div>
        <img
          src="/images/projects/dcr/user-flow-map.png"
          alt="map right"
          className={styles.dcrUserFlowMap}
        />
      </div>
    </section>
  );
};

export default UserFlow;