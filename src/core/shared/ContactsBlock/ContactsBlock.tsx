import React from "react";
import styles from "./contactsBlock.module.scss";

const ConstactsBlock: React.FunctionComponent = () => {
  return (
    <section className={styles.contactsWrapper}>
      <div className={styles.contactsContent}>
        <h3 className={styles.contactsTitle}>
          Lets make your service the best choice for the users
        </h3>
        <p className={styles.contactsText}>
          our team the best choice for you
          <br />
          Join vs work with us
        </p>
        <a href="mailto:team@bandapixels.com" className={styles.mailBtn}>
          team@bandapixels.com
        </a>
      </div>
      <div className={styles.contactsSocial}>Social</div>
    </section>
  );
};

export default ConstactsBlock;
