import React, { useEffect, useState } from "react";
import styles from "./projectTimeline.module.scss";

const ProjectTimeline: React.FunctionComponent = () => {
  const [isMobile, setIsMobile] = useState(false);

  const handleIsMobile = (): void => {
    setIsMobile(window.innerWidth < 669);
  };

  useEffect(() => {
    handleIsMobile();
  }, []);

  return (
    <section className={styles.sunUpTimeline}>
      <div className={styles.sunUpTimelineWrapper}>
        <div className={styles.sunUpTimelineInfo}>
          <h3>Project Timeline</h3>
          <div className={styles.sunUpTimelineStages}>
            <div className={styles.sunUpTimelineStage}>
              <div className={styles.sunUpTimelineHours}>
                13 <span>hours</span>
              </div>
              <div className={styles.sunUpTimelineStageInfo}>
                <p className={styles.sunUpTimelineStageName}>First-stage</p>
                <div className={styles.sunUpTimelineStageTasks}>
                  <div
                    className={styles.sunUpTimelineStageItem}
                    style={{ maxWidth: "200px" }}
                  >
                    Research (4h)
                  </div>
                  <div
                    className={styles.sunUpTimelineStageItem}
                    style={{ maxWidth: "180px" }}
                  >
                    User flow (3h)
                  </div>
                  <div
                    className={styles.sunUpTimelineStageItem}
                    style={{ maxWidth: "260px" }}
                  >
                    Hypothesis testing (6h)
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.sunUpTimelineStage}>
              <div className={styles.sunUpTimelineHours}>
                60 <span>hours</span>
              </div>
              <div className={styles.sunUpTimelineStageInfo}>
                <p className={styles.sunUpTimelineStageName}>Second-stage</p>
                <div className={styles.sunUpTimelineStageTasks}>
                  <div
                    className={styles.sunUpTimelineStageItem}
                    style={{ maxWidth: "650px" }}
                  >
                    Desktop Prototypes (34h)
                  </div>
                  <div
                    className={styles.sunUpTimelineStageItem}
                    style={{ maxWidth: "600px" }}
                  >
                    Desktop Design (26h)
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.sunUpTimelineStage}>
              <div className={styles.sunUpTimelineHours}>
                8 <span>hours</span>
              </div>
              <div className={styles.sunUpTimelineStageInfo}>
                <p className={styles.sunUpTimelineStageName}>Third-stage</p>
                <div className={styles.sunUpTimelineStageTasks}>
                  <div
                    className={styles.sunUpTimelineStageItem}
                    style={{ maxWidth: "300px" }}
                  >
                    Optimization (8h)
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.sunUpTimelineStage}>
              <p className={styles.sunUpTimelineTotal}>
                81 <span>hours</span>
              </p>
              <div className={styles.sunUpTimelineStageInfo}>
                <p className={styles.sunUpTimelineTotal}>All stages</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.sunUpTimelineSolar}>
          {isMobile ? (
            <img
              src="/images/projects/SunUp/mobile/solar.svg"
              alt="SunUp interface"
            />
          ) : (
            <img
              src="/images/projects/SunUp/timeline-solar.png"
              alt="SunUp interface"
            />
          )}

          <div className={styles.sunUpTimelineCircle1} />
          <div className={styles.sunUpTimelineCircle2} />
          <div className={styles.sunUpTimelineCircle3} />
          <div className={styles.sunUpTimelineCircle4} />
        </div>
      </div>
    </section>
  );
};

export default ProjectTimeline;
