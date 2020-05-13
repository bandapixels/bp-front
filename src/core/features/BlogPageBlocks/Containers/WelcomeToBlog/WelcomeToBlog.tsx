import React, { useEffect, useRef, useState } from "react";
import { createGrid, addAnimationToGrid } from "../../../../utils/grid";

import styles from "./welcomeToBlog.module.scss";

const WelcomeToBlog: React.FunctionComponent = () => {
  const [roundedText] = useState(
    `System   System   System   System   System   System   System   System   System   System   `
  );
  const [roundedTextArr] = useState(roundedText.split(""));
  const refGridWrapper = useRef<HTMLDivElement>();

  useEffect(() => {
    const mainWrapper = refGridWrapper.current;

    createGrid(mainWrapper, 75);

    document.addEventListener("mousemove", e => {
      addAnimationToGrid(e, "rgba(23,23,24,.1)", "#171718", mainWrapper);
    });
  }, []);

  return (
    <section
      className={styles.welcomeWrapper}
      ref={refGridWrapper}
      data-header="blog-header"
    >
      <div className={styles.welcomeContent}>
        <div className={styles.welcomeInfo}>
          <h3 className={styles.welcomeTitle}>
            Welcome to
            <br />
            bandapixels blog
          </h3>
          <p className={styles.welcomeText}>
            Here you will find many articles that can help you use your budget
            more efficiently and improve the performance of your business and
            project
          </p>
        </div>
        <div className={styles.welcomeBtnsWrapper}>
          <a href="#" className={styles.welcomeBtn}>
            Who we are?
          </a>
          <a href="#" className={styles.welcomeLink}>
            Сustomer story
          </a>
        </div>
      </div>
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
      <img src="/images/icons/saas-black.png" alt="saas" />
    </section>
  );
};

export default WelcomeToBlog;
