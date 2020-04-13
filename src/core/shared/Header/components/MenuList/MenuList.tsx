import React from "react";
import MenuItem from "../MenuItem/MenuItem";
import styles from "./menuList.module.scss";

const MenuList: React.FunctionComponent = () => {
  const menuItems = [
    {
      name: "Main",
      href: "/"
    },
    {
      name: "Projects",
      href: "#"
    },
    {
      name: "Blog",
      href: "#"
    },
    {
      name: "Services",
      href: "#"
    },
    {
      name: "Contacts",
      href: "#"
    }
  ];

  return (
    <nav className={styles.navBarMenu}>
      <ul className={styles.menuList}>
        {menuItems.map(({ name, href }) => (
          <MenuItem name={name} href={href} key={name} />
        ))}
      </ul>
    </nav>
  );
};

export default MenuList;
