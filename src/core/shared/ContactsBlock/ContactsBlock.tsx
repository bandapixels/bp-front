import React, { useEffect, useRef } from "react";
import classNames from "classnames";
import { createGrid, addAnimationToGrid } from "../../utils/grid";

import SocialList from "../Header/components/SocialList/SocialList";

import styles from "./contactsBlock.module.scss";

interface ConstactsBlockProps {
  classes?: string;
}

const ConstactsBlock: React.FunctionComponent<ConstactsBlockProps> = ({
  classes
}) => {
  const refGridWrapper = useRef<HTMLDivElement>();
  const mailBtnClasses = classNames(styles.mailBtnMob, classes);

  useEffect(() => {
    const mainWrapper = refGridWrapper.current;

    createGrid(mainWrapper, 75);

    document.addEventListener("mousemove", e => {
      addAnimationToGrid(e, "rgba(23,23,24,.1)", "#171718", mainWrapper);
    });
  }, []);

  return (
    <section
      className={styles.contactsWrapper}
      ref={refGridWrapper}
      data-header="black"
    >
      <div className={styles.contactsContent}>
        <h3 className={styles.contactsTitle}>
          Lets make your service
          <br /> the best choice for the users
        </h3>
        <p className={styles.contactsText}>
          Our team the best choice for you
          <br />
          Join vs work with us
        </p>
        <a href="mailto:team@bandapixels.com" className={styles.mailBtn}>
          team@bandapixels.com
        </a>
      </div>
      <div className={styles.contactsSocial}>
        <SocialList />
      </div>
      <a href="mailto:team@bandapixels.com" className={mailBtnClasses}>
        team@bandapixels.com
      </a>
    </section>
  );
};

export default ConstactsBlock;
