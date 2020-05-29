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
      href: "/projects"
    },
    {
      name: "Blog",
      href: "/blog"
    },
    {
      name: "Services",
      href: "/services"
    },
    {
      name: "Contacts",
      href: "/contacts"
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
