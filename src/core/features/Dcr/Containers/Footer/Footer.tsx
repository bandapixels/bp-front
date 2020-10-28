import React from "react";
import AnimationOnScroll, {
  AnimationNames
} from "../../../../utils/AnimationOnScroll/AnimationOnScroll";
import styles from "./footer.module.scss";

const Footer: React.FunctionComponent = () => {
  return (
    <footer className={styles.dcrFooter}>
      <div className={styles.dcrFooterWrapper}>
        <AnimationOnScroll
          animationName={AnimationNames.fadeInUp}
          duration={0.5}
        >
          <h3>Результат</h3>
        </AnimationOnScroll>
        <div className={styles.dcrFooterList}>
          <div className={styles.dcrFooterItem}>
            <AnimationOnScroll
              animationName={AnimationNames.fadeInUp}
              duration={0.5}
            >
              <img src="/images/projects/dcr/device.png" alt="" />
              <p>Обновленный имидж компании</p>
            </AnimationOnScroll>
          </div>
          <div className={styles.dcrFooterItem}>
            <AnimationOnScroll
              animationName={AnimationNames.fadeInUp}
              duration={0.5}
              delay={0.2}
            >
              <img src="/images/projects/dcr/ui.png" alt="" />
              <p>Отзывчивый UI дизайн</p>
            </AnimationOnScroll>
          </div>
          <div className={styles.dcrFooterItem}>
            <AnimationOnScroll
              animationName={AnimationNames.fadeInUp}
              duration={0.5}
              delay={0.4}
            >
              <img src="/images/projects/dcr/routes.png" alt="" />
              <p>Удобные пути пользователя</p>
            </AnimationOnScroll>
          </div>
          <div className={styles.dcrFooterItem}>
            <AnimationOnScroll
              animationName={AnimationNames.fadeInUp}
              duration={0.5}
              delay={0.6}
            >
              <img src="/images/projects/dcr/search.png" alt="" />
              <p>Простой поиск сложных задач</p>
            </AnimationOnScroll>
          </div>
          <div className={styles.dcrFooterItem}>
            <AnimationOnScroll
              animationName={AnimationNames.fadeInUp}
              duration={0.5}
              delay={0.8}
            >
              <img src="/images/projects/dcr/interaction.png" alt="" />
              <p>Модернизированное взаимодействие на сайте</p>
            </AnimationOnScroll>
          </div>
          <div className={styles.dcrFooterItem}>
            <AnimationOnScroll
              animationName={AnimationNames.fadeInUp}
              duration={0.5}
              delay={1}
            >
              <img src="/images/projects/dcr/graph.png" alt="" />
              <p>Возрастание количества клиентов компании</p>
            </AnimationOnScroll>
          </div>
          <div className={styles.dcrFooterItem}>
            <AnimationOnScroll
              animationName={AnimationNames.fadeInUp}
              duration={1}
              delay={1.2}
            >
              <img src="/images/projects/dcr/budget.png" alt="" />
              <p>Увеличение бюджета компании DCR Solutions</p>
            </AnimationOnScroll>
          </div>
        </div>
      </div>
      <div className={styles.dcrFooterBottom} />
    </footer>
  );
};

export default Footer;
