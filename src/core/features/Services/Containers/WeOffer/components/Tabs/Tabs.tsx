import React, { useState, useEffect } from "react";
import classNames from "classnames";
import styles from "./tabs.module.scss";

const Tabs: React.FunctionComponent = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.outerWidth <= 668);
  }, []);

  return (
    <>
      <ul className={styles.tabsList}>
        <li
          onClick={(): void => setActiveTab(0)}
          className={classNames(styles.tabItem, {
            tabItemActive: activeTab === 0
          })}
        >
          <button type="button">
            <span>Discovery stage</span>
          </button>
        </li>
        <li
          onClick={(): void => setActiveTab(1)}
          className={classNames(styles.tabItem, {
            tabItemActive: activeTab === 1
          })}
        >
          <button type="button">
            <span>UX/UI Design</span>
          </button>
        </li>
        <li
          onClick={(): void => setActiveTab(2)}
          className={classNames(styles.tabItem, {
            tabItemActive: activeTab === 2
          })}
        >
          <button type="button">
            <span>Web SAAS development</span>
          </button>
        </li>
      </ul>
      {(activeTab === 0 || isMobile) && (
        <div className={styles.offerRow}>
          <div className={styles.tabContent}>
            <h3>Discovery stage</h3>
            <p>
              Is the first step in Product Development During the P.S., we will
              communicate closely with you to define the project vision and
              scope. We undertake user research, prototype and test ideas, and
              validate tech feasibility to create a user — friendly product with
              the right market fit.
            </p>
          </div>
          <div className={styles.offersInfo}>
            <div className={styles.offersOther}>
              <div>
                <h5>
                  <img src="/images/icons/offers/clock.svg" alt="Timeline" />
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
      )}
      {(activeTab === 1 || isMobile) && (
        <div className={styles.offerRow}>
          <div className={styles.tabContent}>
            <h3>UX/UI Design</h3>
            <p>
              During the UX/UI stage, our designers the UX and UI design for
              mobile and web apps. Using mood boarding and preparing several UI
              concepts, we make sure the visual design of the future product.
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
                  <img src="/images/icons/offers/clock.svg" alt="Timeline" />
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
      )}
      {(activeTab === 2 || isMobile) && (
        <div className={styles.offerRow}>
          <div className={styles.tabContent}>
            <h3>Web SAAS development</h3>
            <p>
              Innovative designand intutive functionality implemented by our
              frontend and backend team result in attracive welsites. We set up
              reliable, secure, efficient and scalable server areitecture so
              that our websites work well, whether it caters for on more than
              100 000 users.
            </p>
          </div>
          <div className={styles.offersInfo}>
            <div className={styles.offersOther}>
              <div>
                <h5>
                  <img src="/images/icons/offers/clock.svg" alt="Timeline" />
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
      )}
    </>
  );
};

export default Tabs;
