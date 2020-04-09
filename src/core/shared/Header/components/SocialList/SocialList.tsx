import React from "react";
import SocialItem from "../SocialItem/SocialItem";
import styles from "./socialList.module.scss";

const SocialList: React.FunctionComponent = () => {
  const socialItems = [
    {
      classes: "socialBehance",
      href: "#"
    },
    {
      classes: "socialFacebook",
      href: "#"
    },
    {
      classes: "socialDribbble",
      href: "#"
    },
    {
      classes: "socialLinkedin",
      href: "#"
    }
  ];

  return (
    <div className={styles.socialWrapper}>
      <ul className={styles.socialList}>
        {socialItems.map(({ classes, href }) => (
          <SocialItem classes={classes} href={href} key={classes} />
        ))}
      </ul>
    </div>
  );
};

export default SocialList;
