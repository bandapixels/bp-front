import React, { useEffect, useRef } from "react";
import Tabs from "./components/Tabs/Tabs";
import styles from "./weOffer.module.scss";
import { createGrid, addAnimationToGrid } from "../../../../utils/grid";

const WeOffer: React.FunctionComponent = () => {
  const refGridWrapper = useRef<HTMLDivElement>();

  useEffect(() => {
    const mainWrapper = refGridWrapper.current;

    createGrid(mainWrapper, 75);

    document.addEventListener("mousemove", e => {
      addAnimationToGrid(e, "rgba(23,23,24,.1)", "#171718", mainWrapper);
    });
  });

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
