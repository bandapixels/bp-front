import React, { useRef, useState } from "react";
import ReactPlayer from "react-player";
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
  const playerRef = useRef();
  const [playing, setPlaying] = useState(false);
  const [playedTime, setPlayedTime] = useState(0);

  const handlePlayPause = (): void => {
    // eslint-disable-next-line no-restricted-globals
    event.stopImmediatePropagation();
    setPlaying(!playing);
  };

  const handleSeekChange = (event): void => {
    setPlayedTime(parseFloat(event.currentTarget.value));
  };

  const handleSeekMouseUp = (event): void => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const player: any = playerRef.current;
    player.seekTo(parseFloat(event.currentTarget.value));
  };

  const handlePlayedTime = ({ played }): void => {
    setPlayedTime(parseFloat(played));
  };

  useOutsideClick(ref, clickHandler);

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalWrap}>
        <div className={styles.videoWrapper} ref={ref}>
          <ReactPlayer
            className={styles.video}
            autoPlay
            playing={playing}
            url="/videos/AppNavi_animate.mp4"
            width="100%"
            height="100%"
            ref={playerRef}
            onProgress={handlePlayedTime}
            onClick={handlePlayPause}
          />
          {!playing && (
            <Button classes="btnPlay" handlerClick={handlePlayPause} />
          )}
          <div className={styles.progressWrapper}>
            <div
              className={styles.progressValue}
              style={{ width: `${playedTime * 100}%` }}
            />
            <input
              className={styles.range}
              type="range"
              min={0}
              max={0.999999}
              step="any"
              value={playedTime}
              onChange={handleSeekChange}
              onMouseUp={handleSeekMouseUp}
            />
          </div>
        </div>
        <Button classes="btnClose" />
      </div>
    </div>
  );
};

export default ModalVideo;
