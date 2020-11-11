import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import classNames from "classnames";
import Link from "next/link";
import useGrid from "../../../../utils/useGrid";
import useRedrawGrid from "../../../../utils/useRedrawGrid";

import styles from "./project.module.scss";
import BigArrow from "../../../../shared/Icons/BigArrow";
import ArrowForSlider from "../../../../shared/Icons/ArrowForSlider";
import Button from "../../../../shared/coreUi/Button/Button";
import { changeSection } from "../../../../shared/FullPageScroll/fullPageScroll.actions";
import { AppState } from "../../../../store/store";
import { getSection } from "../../../../shared/FullPageScroll/fullPageScroll.selectors";

interface ProjectProps {
  title: string;
  description?: string;
  footerTitle?: string;
  footerDescription?: string;
  video: string;
  url: string;
  orientation: string;
  position: string;
  isFirst: boolean;
  projectIndex: number;
}

const Project: React.FunctionComponent<ProjectProps> = ({
  title,
  description,
  footerTitle,
  footerDescription,
  video,
  url,
  orientation,
  position,
  isFirst,
  projectIndex
}) => {
  const [visiblePart, setVisiblePart] = useState(description);
  const [hiddenPart, setHiddenPart] = useState("");
  const [visible, setVisible] = useState(false);
  const router = useRouter();
  const refGridWrapper = useRef<HTMLElement>();
  const dispatch = useDispatch();
  const activeSection = useSelector((state: AppState) => getSection(state));

  const splitTextForMobile = (): void => {
    if (window.outerWidth <= 668) {
      const textArr = visiblePart.split("").filter(word => word.length > 0);

      if (textArr.length > 120) {
        setVisiblePart(textArr.slice(0, 120).join(""));
        setHiddenPart(textArr.slice(120).join(""));
      }
    } else {
      setVisible(true);
    }
  };

  const handlerShowMore = (): void => {
    setVisible(!visible);
  };

  const scrollToSection = (scrollTo: number, section = activeSection): void => {
    const needToScroll = (scrollTo - section) * -100;
    const wrapper = document.querySelector(".fullpageWrapper") as HTMLElement;
    const scrollHeight =
      +wrapper.getAttribute("style")?.replace(/[^-\d]/g, "") || 0;

    if (needToScroll !== 0) {
      wrapper.style.transform = `translateY(${scrollHeight + needToScroll}vh)`;
      dispatch(changeSection(scrollTo));
    }
  };

  const changeProject = (): void => {
    const scrollTo = isFirst ? projectIndex + 1 : projectIndex - 1;

    dispatch(changeSection(scrollTo));
    scrollToSection(scrollTo);
  };

  useEffect(() => {
    splitTextForMobile();
  }, []);

  useGrid(refGridWrapper, "rgba(167,167,167,0.1)", "#171718");
  useRedrawGrid(refGridWrapper);

  return (
    <section
      className={styles.projectPageItem}
      ref={refGridWrapper}
      data-header="blog-header"
    >
      <div
        className={classNames(styles.projectPageContent, {
          mediaLeft: position === "left"
        })}
      >
        <div className={styles.projectPageInfo}>
          {isFirst && <h1>Projects</h1>}
          <h3
            className={styles.projectPageTitle}
            onClick={(): void => {
              router.push(url);
            }}
          >
            {title}
          </h3>
          <div
            className={styles.projectPageProblem}
            onClick={(): void => {
              router.push(url);
            }}
            dangerouslySetInnerHTML={{
              __html: `${visiblePart}${visible ? hiddenPart : "..."}`
            }}
          />
          {!visible && (
            <span className={styles.readMore} onClick={handlerShowMore}>
              read more
            </span>
          )}
        </div>
        {!!video.length && (
          <video
            muted
            autoPlay
            loop
            preload="auto"
            playsInline
            className={classNames(styles.projectPageMedia, {
              portrait: orientation === "portrait",
              noVideo: !video.length
            })}
          >
            <source src={video} type="video/mp4" />
          </video>
        )}
      </div>
      <div className={styles.projectPageFooter}>
        <div className={styles.projectPageFooterLeftPart}>
          <Link href={url}>
            <a href={url} className={styles.projectPageBtn}>
              <span>See the creation process</span>
              <BigArrow />
            </a>
          </Link>
          <div
            className={styles.projectPageDescription}
            onClick={(): void => {
              router.push(url);
            }}
          >
            <h3>{footerTitle}</h3>
            <div>{footerDescription}</div>
          </div>
        </div>
        <div className={styles.projectPageFooterRightPart}>
          <Button
            type="button"
            handlerClick={(): void => {
              changeProject();
            }}
          >
            <ArrowForSlider />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Project;
