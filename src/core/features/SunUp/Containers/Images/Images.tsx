import React from "react";
import useIsMobile from "../../../../utils/useIsMobile";
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
            <p>
              Another crucial point was for users to intuitively understand what
              instruments to use for creating the layout of solar panels.
            </p>
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
              <p>
                Another crucial point was for users to intuitively understand
                what instruments to use for creating the layout of solar panels.
              </p>
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
          <div className={styles.sunUpImagesBack}>
            <img src="/images/projects/SunUp/images-bg.png" alt="SunUp back" />
            <div className={styles.sunUpImagesBackImg}>
              <img
                src="/images/projects/SunUp/images-3.png"
                alt="SunUp interface"
              />
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default Images;
