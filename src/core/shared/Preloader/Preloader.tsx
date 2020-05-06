import React, { useState, useEffect } from "react";
import classNames from "classnames";
import styles from "./preloader.module.scss";

interface PreloaderProps {
  isLoad: boolean;
}

const Preloader: React.FunctionComponent<PreloaderProps> = ({ isLoad }) => {
  const [shouldRender, setRender] = useState(isLoad);
  const classes = classNames(styles.preloaderOverlay, {
    preloaderOut: isLoad
  });

  useEffect(() => {
    if (isLoad) setRender(false);
  }, [isLoad]);

  const onAnimationEnd = (): void => {
    if (isLoad) setRender(true);
  };

  return (
    !shouldRender && (
      <div className={classes} onAnimationEnd={onAnimationEnd}>
        <video autoPlay muted>
          <source src="/videos/AppNavi_animate.mp4" type="video/webm" />
        </video>
      </div>
    )
  );
};

export default Preloader;
