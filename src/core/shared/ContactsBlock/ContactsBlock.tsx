import React, { useRef } from "react";
import classNames from "classnames";
import useGrid from "../../utils/useGrid";

import SocialList from "../Header/components/SocialList/SocialList";

import styles from "./contactsBlock.module.scss";

interface ContactsBlockProps {
  classes?: string;
}

const ContactsBlock: React.FunctionComponent<ContactsBlockProps> = ({
  classes
}) => {
  const refGridWrapper = useRef<HTMLDivElement>();
  const mailBtnClasses = classNames(styles.mailBtnMob, classes);

  useGrid(refGridWrapper, "rgba(23,23,24,0.1)", "#171718");

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

export default ContactsBlock;
