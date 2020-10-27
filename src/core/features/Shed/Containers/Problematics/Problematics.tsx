import React from "react";
import styles from "./problematics.module.scss";

const Problematics: React.FunctionComponent = () => {
  return (
    <section className={styles.shedProblematics}>
      <div className={styles.shedProblematicsWrapper}>
        <div className={styles.shedProblematicsContent}>
          <h3>Problematics</h3>
          <p>
            The sharing service helps to solve several problems at the same
            time. The main task is to create a service with a quick product
            search, high-quality sorting and data ranking. The second task is to
            minimize the number of steps to the end point. To solve this
            problem, it was necessary to create a dashboard UI, optimizing all
            necessary functions. The design was based on the company logo and
            color palette, as well as client's mind map.
          </p>
        </div>
        <div className={styles.shedProblematicsImg}>
          <img
            src="/images/projects/Shed/problematics-1.png"
            alt="Shed Problematics"
          />
        </div>
      </div>
      <div className={styles.shedProblematicsDecor}>
        <img
          src="/images/projects/Shed/logo-grey.png"
          alt="Shed Problematics"
        />
      </div>
      <div className={styles.shedProblematicsWrapper}>
        <div className={styles.shedProblematicsImg}>
          <img
            src="/images/projects/Shed/problematics-2.png"
            alt="Shed Problematics"
          />
        </div>
        <div className={styles.shedProblematicsContentSecond}>
          <p>
            The product was created from scratch, we had just the basics and the
            understanding of the functionality, provided by the client. New
            company - new service. The main task was to create a full-fledged
            product with a convenient infrastructure. High fidelity prototype
            was created based on the client’s mind map. As we went along, we
            improved user interaction processes by reducing the number of steps
            from search to the final goal (rental of the necessary product). The
            color scheme and logo provide by the client harmoniously fit into
            the product design and were approved as the brand colors of the
            company.
          </p>
        </div>
      </div>
      <div className={styles.shedProblematicsDecor}>
        <img
          src="/images/projects/Shed/logo-grey.png"
          alt="Shed Problematics"
        />
      </div>
      <img
        src="/images/projects/Shed/circle-half.png"
        alt="Shed Problematics"
        className={styles.circleHalf}
      />
    </section>
  );
};

export default Problematics;
