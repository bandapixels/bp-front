import React from "react";
import useIsMobile from "../../../../utils/useIsMobile";
import AnimationOnScroll, {
  AnimationNames
} from "../../../../utils/AnimationOnScroll/AnimationOnScroll";
import styles from "./timeline.module.scss";

const Timeline: React.FunctionComponent = () => {
  const isMobile = useIsMobile();

  return (
    <section className={styles.shedTimeline}>
      <AnimationOnScroll animationName={AnimationNames.fadeInUp} duration={1}>
        <h3>Project timeline</h3>
      </AnimationOnScroll>
      <div className={styles.shedTimelineWrapper}>
        <div className={styles.shedTimelineTime}>
          <AnimationOnScroll
            animationName={AnimationNames.fadeInLeft}
            duration={1}
          >
            <img
              src={
                isMobile
                  ? "/images/projects/Shed/time-mobile.png"
                  : "/images/projects/Shed/time.png"
              }
              alt="Shed Time"
            />
          </AnimationOnScroll>
        </div>
        <AnimationOnScroll
          animationName={AnimationNames.fadeInRight}
          duration={1}
        >
          <p>
            At all stages of the Sarai project, certain time intervals were
            determined, which amount to a total of - Total timeline.
          </p>
        </AnimationOnScroll>
      </div>
      <img
        src="/images/projects/Shed/time-graphic.png"
        alt="Shed Time Graphic"
      />
    </section>
  );
};

export default Timeline;
