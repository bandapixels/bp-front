import React from "react";
import styles from "./prototype.module.scss";

const Prototype: React.FunctionComponent = () => {
  return (
    <section className={styles.shedPrototype}>
      <div className={styles.shedPrototypeWrapper}>
        <h3>Prototype and User flow</h3>
        <img src="/images/projects/Shed/prototype.png" alt="Shed Prototype" />
      </div>
    </section>
  );
};

export default Prototype;
