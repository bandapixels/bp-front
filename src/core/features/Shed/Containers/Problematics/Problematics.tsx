import React from "react";
import styles from "./problematics.module.scss";

const Problematics: React.FunctionComponent = () => {
  return (
    <section className={styles.shredProblematics}>
      <div className={styles.shredProblematicsWrapper}>
        <div className={styles.shredProblematicsContent}>
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
        <div className={styles.shredProblematicsImg}>
          <img
            src="/images/projects/Shred/problematics-1.png"
            alt="Shed Problematics"
          />
        </div>
      </div>
      <div className={styles.shredProblematicsDecor}>
        <img
          src="/images/projects/Shred/logo-grey.png"
          alt="Shed Problematics"
        />
      </div>
      <div className={styles.shredProblematicsWrapper}>
        <div className={styles.shredProblematicsImg}>
          <img
            src="/images/projects/Shred/problematics-1.png"
            alt="Shed Problematics"
          />
        </div>
        <div className={styles.shredProblematicsContentSecond}>
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
      <div className={styles.shredProblematicsDecor}>
        <img
          src="/images/projects/Shred/logo-grey.png"
          alt="Shed Problematics"
        />
      </div>
    </section>
  );
};

export default Problematics;
