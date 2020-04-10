import React, { useRef } from "react";
import styles from "./modalVideo.module.scss";
import useOutsideClick from "../../../utils/useOutsideClick";
import Button from "../../coreUi/Button/Button";

interface ModalViewProps {
  clickHandler: () => void;
}

const ModalVideo: React.FunctionComponent<ModalViewProps> = ({
  clickHandler
}) => {
  const ref = useRef();

  useOutsideClick(ref, clickHandler);

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalWrap}>
        <div ref={ref}>
          <video className={styles.video} autoPlay muted>
            <source
              src="https://demo-res.cloudinary.com/video/upload/l_video:ski_jump,fl_splice,e_reverse/l_video:ski_jump,fl_splice,e_accelerate:-50/e_brightness:10,r_max/ski_jump.webm"
              type="video/webm"
            />
          </video>
        </div>
        <Button classes="btnClose" />
      </div>
    </div>
  );
};

export default ModalVideo;
