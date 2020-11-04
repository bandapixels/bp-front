import React, { useState, useRef } from "react";
import useGrid from "../../../../utils/useGrid";
import styles from "./blockWithVideo.module.scss";

import ModalVideo from "../../../../shared/Modal/ModalVideo/ModalVideo";
import Button from "../../../../shared/coreUi/Button/Button";
import AnimatedLine from "../../../../shared/AnimatedLine/AnimatedLine";
import useRedrawGrid from "../../../../utils/useRedrawGrid";

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

  const scrollToFormInMobile = (): void => {
    const formSection = document.querySelector(".discussWrapper");

    formSection.scrollIntoView({ behavior: "smooth" });
  };

  useGrid(refGridWrapper, "rgba(23,23,24,0.1)", "#fff");
  useRedrawGrid(refGridWrapper);

  return (
    <>
      <section
        className={styles.mainWrapper}
        ref={refGridWrapper}
        id="first-section"
      >
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
            <Button
              classes="yellowBtnWithIcon"
              handlerClick={scrollToFormInMobile}
            >
              <div>
                discuss the project
                <img src="/images/icons/arrow.svg" alt="arrow" />
              </div>
            </Button>
            {/*<Button classes="transparentBtnWithIcon">*/}
            {/*  <div>*/}
            {/*    work process*/}
            {/*    <img src="/images/icons/play-btn.svg" alt="arrow" />*/}
            {/*  </div>*/}
            {/*</Button>*/}
          </div>
        </div>
        <div
          className={styles.titlesBlock}
          // onClick={(): void => setModalOpen(!modalOpen)}
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
            <source src="/videos/AppNavi_animate.mp4" type="video/mp4" />
          </video>
        </div>

        {modalOpen && <ModalVideo clickHandler={handlerClosePopup} />}
        <AnimatedLine backgroundColor="#333" filledColor="#fff" />
      </section>
    </>
  );
};

export default BlockWithVideo;
