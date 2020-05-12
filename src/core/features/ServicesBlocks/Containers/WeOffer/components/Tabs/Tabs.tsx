import React, { useState } from "react";
import classNames from "classnames";
import styles from "./tabs.module.scss";

const Tabs: React.FunctionComponent = ({ children }) => {
  const [activeTab, setActiveTab] = useState(children[0].props.label);

  const handlerChangeTab = (label: string): void => {
    setActiveTab(label);
  };

  const isMobile = (): boolean => {
    return globalThis.innerWidth <= 668;
  };

  return (
    <>
      <ul className={styles.tabsList}>
        {React.Children.map(children, (tab: React.ReactElement) => {
          const { label } = tab.props;
          const classes = classNames(styles.tabItem, {
            tabItemActive: label === activeTab
          });

          return (
            <li
              onClick={(): void => handlerChangeTab(label)}
              key={label}
              className={classes}
            >
              <button type="button">
                <span>{label}</span>
              </button>
            </li>
          );
        })}
      </ul>
      {React.Children.map(children, (tab: React.ReactElement) => {
        if (isMobile()) return tab.props.children;
        if (tab.props.label !== activeTab) return undefined;
        return tab.props.children;
      })}
    </>
  );
};

export default Tabs;
