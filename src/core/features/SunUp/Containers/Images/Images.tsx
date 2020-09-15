import React, { useEffect, useState } from "react";
import styles from "./images.module.scss";

const Images: React.FunctionComponent = () => {
  const [isMobile, setIsMobile] = useState(false);

  const handleIsMobile = (): void => {
    setIsMobile(window.innerWidth < 669);
  };

  useEffect(() => {
    handleIsMobile();
  }, []);

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
              Solar Roof is comparable in price to a typical roof with solar
              panels. Purchase SunUp Roof at one of the lowest cost-per-watt of
              any national provider and take control of your monthly electricity
              bill.
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
