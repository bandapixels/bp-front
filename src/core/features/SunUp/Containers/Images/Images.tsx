import React from "react";
import useIsMobile from "../../../../utils/useIsMobile";
import AnimationOnScroll, {
  AnimationNames
} from "../../../../utils/AnimationOnScroll/AnimationOnScroll";
import styles from "./images.module.scss";

const Images: React.FunctionComponent = () => {
  const isMobile = useIsMobile();

  return (
    <section className={styles.sunUpImages}>
      {isMobile ? (
        <>
          <div className={styles.sunUpImagesFirst}>
            <img
              src="/images/projects/SunUp/mobile/images-1.png"
              alt="SunUp main"
            />
            <img
              src="/images/projects/SunUp/mobile/images-2.png"
              alt="SunUp main"
            />
            <img src="/images/projects/SunUp/images-2.png" alt="SunUp house" />
          </div>
          <div className={styles.sunUpImagesSecond}>
            <div>
              <h3>Results</h3>
              <p>
                We have created intuitive user interface for an interactive web
                application, following modern trends in design. The user
                questionnaire clearly showed that the new user experience
                oriented design is more convenient and comprehensible, as well
                as average user’s time for panels layout creation has decreased
                by 45%
              </p>
            </div>
            <img
              src="/images/projects/SunUp/mobile/images-3.png"
              alt="SunUp main"
            />
            <img
              src="/images/projects/SunUp/mobile/images-4.png"
              alt="SunUp main"
            />
          </div>
        </>
      ) : (
        <>
          <div className={styles.sunUpImagesWrapper}>
            <div className={styles.sunUpImagesMain}>
              <img src="/images/projects/SunUp/images-1.png" alt="SunUp main" />
              <div>
                <AnimationOnScroll
                  animationName={AnimationNames.fadeInUp}
                  duration={1}
                >
                  <h3>Results</h3>
                </AnimationOnScroll>
                <AnimationOnScroll
                  animationName={AnimationNames.fadeInUp}
                  duration={1}
                  delay={0.3}
                >
                  <p>
                    We have created intuitive user interface for an interactive
                    web application, following modern trends in design. The user
                    questionnaire clearly showed that the new user experience
                    oriented design is more convenient and comprehensible, as
                    well as average user’s time for panels layout creation has
                    decreased by 45%
                  </p>
                </AnimationOnScroll>
              </div>
            </div>
            <div className={styles.sunUpImagesContent}>
              <div className={styles.sunUpImagesContentImg}>
                <img
                  src="/images/projects/SunUp/images-2.png"
                  alt="SunUp house"
                />
              </div>
            </div>
          </div>
          {/*<div className={styles.sunUpImagesBack}>*/}
          {/*  <img src="/images/projects/SunUp/images-bg.png" alt="SunUp back" />*/}
          {/*  <div className={styles.sunUpImagesBackImg}>*/}
          {/*    <img*/}
          {/*      src="/images/projects/SunUp/images-3.png"*/}
          {/*      alt="SunUp interface"*/}
          {/*    />*/}
          {/*  </div>*/}
          {/*</div>*/}
        </>
      )}

      <p className={styles.thanksMessage}>
        <AnimationOnScroll
          animationName={AnimationNames.fadeInUp}
          duration={1}
          delay={0.3}
          as="span"
        >
          Thanks for watching :)
        </AnimationOnScroll>
      </p>
    </section>
  );
};

export default Images;
