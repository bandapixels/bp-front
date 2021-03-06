import React, { useRef } from "react";
import classNames from "classnames";
import { useRouter } from "next/router";
import useGrid from "../../utils/useGrid";
import SocialList from "../Header/components/SocialList/SocialList";

import styles from "./contactsBlock.module.scss";
import useRedrawGrid from "../../utils/useRedrawGrid";

interface ContactsBlockProps {
  classes?: string;
}

const ContactsBlock: React.FunctionComponent<ContactsBlockProps> = ({
  classes
}) => {
  const refGridWrapper = useRef<HTMLDivElement>();
  const router = useRouter();
  const mailBtnClasses = classNames(styles.mailBtnMob, classes);
  const contactsWrapperClasses = classNames(styles.contactsWrapper, {
    contactsPage: router.pathname === "/contacts"
  });

  useGrid(refGridWrapper, "rgba(167,167,167,0.1)", "rgba(23, 23, 24, 0.4)");
  useRedrawGrid(refGridWrapper);

  return (
    <section
      className={contactsWrapperClasses}
      ref={refGridWrapper}
      data-header="black"
    >
      <div className={styles.contactsContent}>
        <h3 className={styles.contactsTitle}>
          Lets make your service
          <br /> the best choice for the users
        </h3>
        <p className={styles.contactsText}>
          Let our team be the best choice for you
          <br />
          Contact Us
        </p>
        <a href="mailto:team@bandapixels.com" className={styles.mailBtn}>
          team@bandapixels.com
        </a>
      </div>

      <div className={styles.contactsSocial}>
        <SocialList />
        <a href="mailto:team@bandapixels.com" className={mailBtnClasses}>
          team@bandapixels.com
        </a>
      </div>
    </section>
  );
};

export default ContactsBlock;
