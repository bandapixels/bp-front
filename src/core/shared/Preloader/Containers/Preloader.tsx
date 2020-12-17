import React, { useEffect, useState } from "react";
import classNames from "classnames";
import { useSelector, useDispatch } from "react-redux";
import styles from "./preloader.module.scss";
import { getStart, getIsShow } from "../preloader.selectors";
import { AppState } from "../../../store/store";
import { setStart, setIsShow } from "../preloader.actions";

const Preloader: React.FunctionComponent = () => {
  const dispatch = useDispatch();
  const shouldStart = useSelector((state: AppState) => getStart(state));
  const isShow = useSelector((state: AppState) => getIsShow(state));
  const [startAnimation, setStartAnimation] = useState(false);
  const classes = classNames(styles.preloaderOverlay, {
    preloaderOut: startAnimation
  });

  const handlerVideoEnd = (): void => {
    setStartAnimation(true);

    if (window.innerWidth < 669) {
      document.body.style.overflow = "visible";
      document.body.style.height = "auto";
    }

    dispatch(setIsShow());
  };

  const handlerAnimation = (): void => {
    dispatch(setStart());
  };

  useEffect(() => {
    document.body.classList.add("noScroll");

    return (): void => document.body.classList.remove("noScroll");
  }, []);

  return (
    !isShow &&
    shouldStart && (
      <div className={classes} onAnimationEnd={handlerAnimation}>
        <video
          autoPlay
          muted
          loop={false}
          onEnded={handlerVideoEnd}
          playsInline
        >
          <source src="/videos/BandaPixelsAnimation.mp4" type="video/mp4" />
        </video>
      </div>
    )
  );
};

export default Preloader;
