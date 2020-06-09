import React from "react";
import SocialItem from "../SocialItem/SocialItem";
import styles from "./socialList.module.scss";

const SocialList: React.FunctionComponent = () => {
  const socialItems = [
    {
      classes: "socialBehance",
      href: "https://www.behance.net/bandapixels"
    },
    {
      classes: "socialFacebook",
      href: "https://www.facebook.com/BandaPixels/"
    },
    {
      classes: "socialDribbble",
      href: "https://dribbble.com/bandapixels"
    },
    {
      classes: "socialLinkedin",
      href: "https://www.linkedin.com/organization-guest/company/bandapixels"
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
