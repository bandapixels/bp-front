import React from "react";
import useIsMobile from "../../../../utils/useIsMobile";
import styles from "./prototype.module.scss";

const Prototype: React.FunctionComponent = () => {
  const isMobile = useIsMobile();

  return (
    <section className={styles.shedPrototype}>
      <div className={styles.shedPrototypeWrapper}>
        <h3>Prototype and User flow</h3>
        <img
          src={
            isMobile
              ? "/images/projects/Shed/prototype-mobile.png"
              : "/images/projects/Shed/prototype.png"
          }
          alt="Shed Prototype"
        />
      </div>
    </section>
  );
};

export default Prototype;
