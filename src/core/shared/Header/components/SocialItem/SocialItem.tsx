import React from "react";
import styles from "./socialItem.module.scss";

interface SocialItemProps {
  classes: string;
  href: string;
}

const SocialItem: React.FunctionComponent<SocialItemProps> = ({
  classes,
  href
}) => {
  return (
    <li className={styles.socialItem}>
      <a href={href} className={styles.socialIcon}>
        <span className={styles[classes]} />
      </a>
    </li>
  );
};

export default SocialItem;
