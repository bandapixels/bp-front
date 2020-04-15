import React, { useState } from "react";
import styles from "./blockWithVideo.module.scss";

import ModalVideo from "../../../../shared/Modal/ModalVideo/ModalVideo";

const BlockWithVideo: React.FunctionComponent = () => {
  const [roundedText] = useState(
    `System   System   System   System   System   System   System   System   System   System   `
  );
  const [roundedTextArr] = useState(roundedText.split(""));
  const [modalOpen, setModalOpen] = useState(false);

  const handlerClosePopup = (): void => {
    setModalOpen(!modalOpen);
  };

  return (
    <>
      <section className={styles.headerWrapper}>
        <div className={styles.yellowBlock}>
          <div className={styles.bigLettersWrapper}>
            <div className={styles.firstLine}>
              <span>New business</span>
              <span>opportunities with</span>
            </div>
            <div className={styles.lastLine}>
              <span>We help</span>
              <span>startups</span>
              <span>to create</span>
            </div>
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
