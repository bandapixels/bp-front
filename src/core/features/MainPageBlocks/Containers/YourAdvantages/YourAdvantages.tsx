import React, { useEffect, useRef } from "react";
import { createGrid, addAnimationToGrid } from "../../../../utils/grid";

import styles from "./yourAdvantages.module.scss";

const YourAdvantages: React.FunctionComponent = () => {
  const refGridWrapper = useRef<HTMLDivElement>();
  const refSlider = useRef<HTMLDivElement>();

  const handlerWheel = (e): void => {
    const slider = refSlider.current;
    const direction = e.deltaY > 0 ? 1 : -1;
    const newPosition = slider.scrollLeft + 300 * direction;

    slider.scroll({ left: newPosition, behavior: "smooth" });
  };

  useEffect(() => {
    const mainWrapper = refGridWrapper.current;

    createGrid(mainWrapper, 75);

    document.addEventListener("mousemove", e => {
      addAnimationToGrid(e, "rgba(23,23,24,.1)", "#fff", mainWrapper);
    });
  }, []);

  return (
    <section className={styles.advantagesWrapper} ref={refGridWrapper}>
      <div className={styles.advantagesBig}>
        <span />
        <span>advantages</span>
      </div>
      <div
        className={styles.advantagesContainer}
        ref={refSlider}
        onWheel={handlerWheel}
      >
        <div className={styles.advantagesItem}>
          <div className={styles.advantagesTechnologies} />
          <div className={styles.advantagesInfoTechnologies}>
            <h3 className={styles.advantagesTitle}>
              Popular
              <br />
              and reliable
              <br />
              technologies
            </h3>
            <p className={styles.advantagesDescription}>
              We use Node.js,
              <br />
              Angular and React
            </p>
          </div>
        </div>
        <div className={styles.advantagesItem}>
          <div className={styles.advantagesSpeed} />
          <div className={styles.advantagesInfoSpeed}>
            <h3 className={styles.advantagesTitle}>
              Being up
              <br />
              to speed
            </h3>
            <p className={styles.advantagesDescription}>
              At all the stages you work with a PM who updates you on the
              current progress
            </p>
          </div>
        </div>
        <div className={styles.advantagesItem}>
          <div className={styles.advantagesService} />
          <div className={styles.advantagesInfoService}>
            <h3 className={styles.advantagesTitle}>
              Service
              <br />
              convenience
            </h3>
            <p className={styles.advantagesDescription}>
              We substantially invest in UX/UI to make it comfortable for a user
              to utilize a service
            </p>
          </div>
        </div>
        <div className={styles.advantagesItem}>
          <div className={styles.advantagesRisks} />
          <div className={styles.advantagesInfoRisks}>
            <h3 className={styles.advantagesTitle}>Risks elimination</h3>
            <p className={styles.advantagesDescription}>
              We are a big team of interchangable coworkers. In case of any
              eventualities with a developer, your project never suffers being
              taken by another specialist
            </p>
          </div>
        </div>
        <div className={styles.advantagesItem}>
          <div className={styles.advantagesDeadlines} />
          <div className={styles.advantagesInfoDeadlines}>
            <h3 className={styles.advantagesTitle}>
              Assurance
              <br />
              of meeting
              <br />
              the deadlines
            </h3>
            <p className={styles.advantagesDescription}>
              We have rules but are flexible at the same time, so we are able to
              change the workflow to obtain the results within specified time
            </p>
          </div>
        </div>
        <div className={styles.advantagesItem}>
          <div className={styles.advantagesTeam} />
          <div className={styles.advantagesInfoTeam}>
            <h3 className={styles.advantagesTitle}>Team expansion</h3>
            <p className={styles.advantagesDescription}>
              We expand our team as and when necessary. So you do not have to
              look for new specialists
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default YourAdvantages;
