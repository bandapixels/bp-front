import React from "react";
import useIsMobile from "../../../../utils/useIsMobile";
import styles from "./userFlow.module.scss";

const MainBlock: React.FunctionComponent = () => {
  const isMobile = useIsMobile();

  return (
    <section className={styles.sunUpUserFlowMain}>
      <div className={styles.sunUpUserFlowWrapper}>
        <div className={styles.sunUpUserFlowInfo}>
          <h3>User fIow</h3>
          <p>
            При разработке юзер флов, было принято решение оптимизировать пару
            шагов для более быстрого создания проекта пользователем системы.
          </p>
        </div>
        <div className={styles.sunUpUserFlowMap}>
          {isMobile ? (
            <>
              <img
                src="/images/projects/SunUp/mobile/flow-1.png"
                alt="SunUp flow first screen"
              />
              <img
                src="/images/projects/SunUp/mobile/flow-2.png"
                alt="SunUp flow second screen"
              />
              <img
                src="/images/projects/SunUp/mobile/flow-3.png"
                alt="SunUp flow third screen"
              />
              <img
                src="/images/projects/SunUp/mobile/flow-4.png"
                alt="SunUp flow fourth screen"
              />
              <img
                src="/images/projects/SunUp/mobile/flow-5.png"
                alt="SunUp flow fifth screen"
              />
              <img
                src="/images/projects/SunUp/mobile/flow-6.png"
                alt="SunUp flow sixth screen"
              />
            </>
          ) : (
            <img
              src="/images/projects/SunUp/userFlow-map.png"
              alt="SunUp user flow map"
            />
          )}
        </div>
        <div className={styles.sunUpUserFlowInterface}>
          {isMobile ? null : (
            <img
              src="/images/projects/SunUp/userFlow-interface.png"
              alt="SunUp user flow interface"
            />
          )}
        </div>
        <p className={styles.sunUpUserFlowWireframes}>12 Wireframes</p>
      </div>
    </section>
  );
};

export default MainBlock;
