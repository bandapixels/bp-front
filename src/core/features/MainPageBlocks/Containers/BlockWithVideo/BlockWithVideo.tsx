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
        <div className={styles.yellowBlock} />
        <div
          className={styles.titlesBlock}
          onClick={(): void => setModalOpen(!modalOpen)}
        >
          <div className={styles.titlesWrapper}>
            <h1 className={styles.roundedTitle}>
              {roundedTextArr.map((char, index) => (
                // eslint-disable-next-line react/no-array-index-key
                <span key={index} className={styles[`char${index}`]}>
                  {char}
                </span>
              ))}
            </h1>
            <h1 className={styles.smallRoundedTitle}>
              {roundedTextArr.map((char, index) => (
                // eslint-disable-next-line react/no-array-index-key
                <span key={index} className={styles[`char${index}`]}>
                  {char}
                </span>
              ))}
            </h1>
          </div>
          <video className={styles.video} autoPlay muted>
            <source
              src="https://demo-res.cloudinary.com/video/upload/l_video:ski_jump,fl_splice,e_reverse/l_video:ski_jump,fl_splice,e_accelerate:-50/e_brightness:10,r_max/ski_jump.webm"
              type="video/webm"
            />
          </video>
        </div>
      </section>

      {modalOpen && <ModalVideo clickHandler={handlerClosePopup} />}
    </>
  );
};

export default BlockWithVideo;
