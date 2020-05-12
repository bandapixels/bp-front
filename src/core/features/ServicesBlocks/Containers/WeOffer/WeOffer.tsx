import React, { useEffect, useRef } from "react";
import styles from "./weOffer.module.scss";
import Tabs from "./components/Tabs/Tabs";
import Tab from "./components/Tab/Tab";
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
        <Tabs>
          <Tab label="Discovery stage">
            <div className={styles.offerRow}>
              <div className={styles.tabContent}>
                <h3>Discovery stage</h3>
                <p>
                  Is the first step in Product Development During the P.S., we
                  will communicate closely with you to define the project vision
                  and scope. We undertake user research, prototype and test
                  ideas, and validate tech feasibility to create a user —
                  friendly product with the right market fit.
                </p>
              </div>
              <div className={styles.offersInfo}>
                <div className={styles.offersOther}>
                  <div>
                    <h5>
                      <img
                        src="/images/icons/offers/clock.svg"
                        alt="Timeline"
                      />
                      <span>Timeline</span>
                    </h5>
                    <ul>
                      <li>3+ month</li>
                    </ul>
                  </div>
                  <div>
                    <h5>
                      <img
                        src="/images/icons/offers/figma.svg"
                        alt="Deliverables"
                      />
                      <span>Deliverables</span>
                    </h5>
                    <ul>
                      <li>
                        Design screens
                        <br /> in Figma
                      </li>
                    </ul>
                  </div>
                </div>
                <div className={styles.offerPeople}>
                  <h5>
                    <img
                      src="/images/icons/offers/people.svg"
                      alt="People involved"
                    />
                    <span>People involved</span>
                  </h5>
                  <ul>
                    <li>UX designer</li>
                    <li>UI designer</li>
                    <li>Visual QA</li>
                  </ul>
                </div>
              </div>
            </div>
          </Tab>
          <Tab label="UX/UI Design">
            <div className={styles.offerRow}>
              <div className={styles.tabContent}>
                <h3>UX/UI Design</h3>
                <p>
                  During the UX/UI stage, our designers the UX and UI design for
                  mobile and web apps. Using mood boarding and preparing several
                  UI concepts, we make sure the visual design of the future
                  product.
                </p>
              </div>
              <div className={styles.offersInfo}>
                <div className={styles.offersOther}>
                  <div>
                    <h5>
                      <img
                        src="/images/icons/offers/figma.svg"
                        alt="Deliverables"
                      />
                      <span>Deliverables</span>
                    </h5>
                    <ul>
                      <li>
                        Design screens
                        <br /> in Figma
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h5>
                      <img
                        src="/images/icons/offers/clock.svg"
                        alt="Timeline"
                      />
                      <span>Timeline</span>
                    </h5>
                    <ul>
                      <li>3+ month</li>
                    </ul>
                  </div>
                </div>
                <div className={styles.offerPeople}>
                  <h5>
                    <img
                      src="/images/icons/offers/people.svg"
                      alt="People involved"
                    />
                    <span>People involved</span>
                  </h5>
                  <ul>
                    <li>UX designer</li>
                    <li>UI designer</li>
                    <li>Visual QA</li>
                  </ul>
                </div>
              </div>
            </div>
          </Tab>
          <Tab label="Web SAAS development">
            <div className={styles.offerRow}>
              <div className={styles.tabContent}>
                <h3>Web SAAS development</h3>
                <p>
                  Innovative designand intutive functionality implemented by our
                  frontend and backend team result in attracive welsites. We set
                  up reliable, secure, efficient and scalable server areitecture
                  so that our websites work well, whether it caters for on more
                  than 100 000 users.
                </p>
              </div>
              <div className={styles.offersInfo}>
                <div className={styles.offersOther}>
                  <div>
                    <h5>
                      <img
                        src="/images/icons/offers/clock.svg"
                        alt="Timeline"
                      />
                      <span>Timeline</span>
                    </h5>
                    <ul>
                      <li>3+ month</li>
                    </ul>
                  </div>
                  <div>
                    <h5>
                      <img
                        src="/images/icons/offers/figma.svg"
                        alt="Deliverables"
                      />
                      <span>Deliverables</span>
                    </h5>
                    <ul>
                      <li>
                        Design screens
                        <br /> in Figma
                      </li>
                    </ul>
                  </div>
                </div>
                <div className={styles.offerPeople}>
                  <h5>
                    <img
                      src="/images/icons/offers/people.svg"
                      alt="People involved"
                    />
                    <span>People involved</span>
                  </h5>
                  <ul>
                    <li>UI designer</li>
                    <li>UX designer</li>
                    <li>Visual QA</li>
                  </ul>
                </div>
              </div>
            </div>
          </Tab>
        </Tabs>
      </div>
    </section>
  );
};

export default WeOffer;
