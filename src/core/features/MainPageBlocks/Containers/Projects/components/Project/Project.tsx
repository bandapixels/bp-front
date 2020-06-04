import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import classNames from "classnames";
import Link from "next/link";

import styles from "./project.module.scss";
import BigArrow from "../../../../../../shared/Icons/BigArrow";

interface ProjectProps {
  name: string;
  description?: string;
  problem?: string;
  video: string;
  url: string;
  orientation: string;
  position: string;
  activeSlide: number;
}

const Project: React.FunctionComponent<ProjectProps> = ({
  name,
  description,
  problem,
  video,
  url,
  orientation,
  position,
  activeSlide
}) => {
  const [visiblePart, setVisiblePart] = useState(problem);
  const [hiddenPart, setHiddenPart] = useState("");
  const [visible, setVisible] = useState(false);
  const router = useRouter();

  const splitTextForMobile = (): void => {
    if (globalThis.outerWidth <= 668) {
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

  useEffect(() => {
    splitTextForMobile();
  }, []);

  return (
    <div className={styles.projectItem}>
      <div
        className={classNames(styles.projectContent, {
          mediaLeft: position === "left"
        })}
      >
        <div className={styles.projectInfo}>
          {router.pathname === "/projects" && activeSlide === 0 && (
            <h1>Projects</h1>
          )}
          <h3
            className={styles.projectTitle}
            onClick={(): void => {
              router.push(url);
            }}
          >
            What problem do we solve
          </h3>
          <div
            className={styles.projectProblem}
            onClick={(): void => {
              router.push(url);
            }}
          >
            {visiblePart}
            {visible ? hiddenPart : "..."}
          </div>
          {!visible && (
            <span className={styles.readMore} onClick={handlerShowMore}>
              read more
            </span>
          )}
        </div>
        <div
          className={classNames(styles.projectMedia, {
            portrait: orientation === "portrait"
          })}
        >
          <video muted autoPlay loop preload="auto">
            <source src={video} type="video/mp4" />
          </video>
        </div>
      </div>
      <div className={styles.projectsFooter}>
        <div className={styles.projectsFooterLeftPart}>
          <Link href={url}>
            <a href={url} className={styles.projectBtn}>
              <span>See the creation process</span>
              <BigArrow />
            </a>
          </Link>
          <div
            className={styles.projectDescription}
            onClick={(): void => {
              router.push(url);
            }}
          >
            <h3>{name}</h3>
            <div>{description}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
