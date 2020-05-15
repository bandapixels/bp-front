import React, { useRef } from "react";
import Tabs from "./components/Tabs/Tabs";
import styles from "./weOffer.module.scss";
import useGrid from "../../../../utils/useGrid";

const WeOffer: React.FunctionComponent = () => {
  const refGridWrapper = useRef<HTMLDivElement>();

  useGrid(refGridWrapper, "rgba(23,23,24,0.1)", "#171718");

  return (
    <section
      className={styles.offerWrapper}
      ref={refGridWrapper}
      data-header="big-yellow"
    >
      <div className={styles.offerContainer}>
        <h1>We offer</h1>
        <Tabs />
      </div>
    </section>
  );
};

export default WeOffer;
