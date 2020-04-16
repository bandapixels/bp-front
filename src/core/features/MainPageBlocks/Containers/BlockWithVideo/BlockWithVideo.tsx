import React, { useState, useEffect, useRef } from "react";
import { createGrid, addAnimationToGrid } from "../../../../utils/grid";
import styles from "./blockWithVideo.module.scss";

import ModalVideo from "../../../../shared/Modal/ModalVideo/ModalVideo";
import Button from "../../../../shared/coreUi/Button/Button";

const BlockWithVideo: React.FunctionComponent = () => {
  const [roundedText] = useState(
    `System   System   System   System   System   System   System   System   System   System   `
  );
  const [roundedTextArr] = useState(roundedText.split(""));
  const [modalOpen, setModalOpen] = useState(false);
  const refGridWrapper = useRef<HTMLDivElement>();

  const handlerClosePopup = (): void => {
    setModalOpen(!modalOpen);
  };

  useEffect(() => {
    const mainWrapper = refGridWrapper.current;

    createGrid(mainWrapper, 75);

    mainWrapper.addEventListener("mousemove", e => {
      addAnimationToGrid(e, "rgba(23,23,24,.1)", "#fff");
    });
  }, []);

  return (
    <>
      <section className={styles.mainWrapper} ref={refGridWrapper}>
        <div className={styles.yellowBlock}>
          <div className={styles.bigLettersWrapper}>
            <div className={styles.firstLine}>
              <span>New business</span>
              <span>opportunities with</span>
            </div>
            <div className={styles.lastLine}>
              <span>We help</span>
              <span>startups</span>
              <span className={styles.yellowText}>to create</span>
            </div>
          </div>
          <div className={styles.bigLettersMobileWrapper}>
            <div className={styles.firstMobileLine}>
              <span>New business</span>
              <span className={styles.yellowText}>opportunities</span>
              <span>with saas system</span>
            </div>
            <div className={styles.lastMobileLine}>
              <span>
                <span className={styles.yellowText}>We help</span> startups to
              </span>
              <span>create saas system</span>
            </div>
          </div>
          <p className={styles.mainText}>
            We know everything about the budget, terms and requirements of the
            business. This allows you to rationally use the budget and
            guarantees theresult.
          </p>
          <div className={styles.mobileBtnsWrapper}>
            <Button classes="yellowBtnWithIcon">
              discuss the project
              <img src="/images/icons/arrow.svg" alt="arrow" />
            </Button>
            <Button classes="transparentBtnWithIcon">
              work process
              <img src="/images/icons/play-btn.svg" alt="arrow" />
            </Button>
          </div>
        </div>
        <div
          className={styles.titlesBlock}
          onClick={(): void => setModalOpen(!modalOpen)}
        >
          <div className={styles.titlesWrapper}>
            <h1 className={styles.roundedTitle}>
              {roundedTextArr.map((char, index) => {
                const key = char + index;
                return (
                  <span key={key} className={styles[`char${index}`]}>
                    {char}
                  </span>
                );
              })}
            </h1>
            <h1 className={styles.smallRoundedTitle}>
              {roundedTextArr.map((char, index) => {
                const key = char + index;
                return (
                  <span key={key} className={styles[`char${index}`]}>
                    {char}
                  </span>
                );
              })}
            </h1>
          </div>
          <video className={styles.video} autoPlay muted>
            <source src="/videos/AppNavi_animate.mp4" type="video/webm" />
          </video>
        </div>
      </section>

      {modalOpen && <ModalVideo clickHandler={handlerClosePopup} />}
    </>
  );
};

export default BlockWithVideo;
