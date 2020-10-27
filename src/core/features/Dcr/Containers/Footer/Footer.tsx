import React from "react";
import styles from "./footer.module.scss";

const Footer: React.FunctionComponent = () => {
  return (
    <footer className={styles.dcrFooter}>
      <div className={styles.dcrFooterWrapper}>
        <h3>Результат</h3>
        <div className={styles.dcrFooterList}>
          <div className={styles.dcrFooterItem}>
            <img src="/images/projects/dcr/device.png" alt="" />
            <p>Обновленный имидж компании</p>
          </div>
          <div className={styles.dcrFooterItem}>
            <img src="/images/projects/dcr/ui.png" alt="" />
            <p>Отзывчивый UI дизайн</p>
          </div>
          <div className={styles.dcrFooterItem}>
            <img src="/images/projects/dcr/routes.png" alt="" />
            <p>Удобные пути пользователя</p>
          </div>
          <div className={styles.dcrFooterItem}>
            <img src="/images/projects/dcr/search.png" alt="" />
            <p>Простой поиск сложных задач</p>
          </div>
          <div className={styles.dcrFooterItem}>
            <img src="/images/projects/dcr/interaction.png" alt="" />
            <p>Модернизированное взаимодействие на сайте</p>
          </div>
          <div className={styles.dcrFooterItem}>
            <img src="/images/projects/dcr/graph.png" alt="" />
            <p>Возрастание количества клиентов компании</p>
          </div>
          <div className={styles.dcrFooterItem}>
            <img src="/images/projects/dcr/budget.png" alt="" />
            <p>Увеличение бюджета компании DCR Solutions</p>
          </div>
        </div>
      </div>
      <div className={styles.dcrFooterBottom} />
    </footer>
  );
};

export default Footer;
