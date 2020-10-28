import React from "react";
import AnimationOnScroll, {
  AnimationNames
} from "../../../../utils/AnimationOnScroll/AnimationOnScroll";
import styles from "./main.module.scss";

const Main: React.FunctionComponent = () => {
  return (
    <section className={styles.dcrMain}>
      <div className={styles.dcrMainWrapper}>
        <div className={styles.dcrMainImages}>
          <div className={styles.dcrMainImagesRow}>
            <AnimationOnScroll
              animationName={AnimationNames.fadeIn}
              duration={1}
            >
              <div className={styles.dcrMainLogo}>
                <img src="/images/projects/dcr/dcr-logo.png" alt="dcr logo" />
              </div>
            </AnimationOnScroll>
            <div className={styles.dcrMainMac}>
              <img
                src="/images/projects/dcr/mac.png"
                alt="dcr interface on the computer"
              />
            </div>
          </div>
        </div>
        <div className={styles.dcrAboutWrapper}>
          <img
            src="/images/projects/dcr/about.png"
            className={styles.dcrAboutImage}
            alt="dcr about"
          />
          <div className={styles.dcrAboutText}>
            <AnimationOnScroll
              animationName={AnimationNames.fadeInUp}
              duration={1}
            >
              <h3>О компании</h3>
            </AnimationOnScroll>
            <p>
              <AnimationOnScroll
                animationName={AnimationNames.fadeInUp}
                duration={1}
                delay={0.5}
                as="span"
              >
                DCR Solutions – инновационная датская IT-компания, которая
                занимается диджитализацей сложных рабочих процессов и конечно
                же, разработкой поддерживаемых пользователями IT-систем.
              </AnimationOnScroll>
            </p>
            <p>
              <AnimationOnScroll
                animationName={AnimationNames.fadeInUp}
                duration={1}
                delay={0.7}
                as="span"
              >
                На своей платформе они создают различные графики и схемы для
                отображения статистики, которые пошагово помогают решить
                проблемы, возникающие в бизнесе, связанные с привлечением нового
                персонала, расходами компании, процессом страхования.
              </AnimationOnScroll>
            </p>
          </div>
        </div>
      </div>
      <img
        src="/images/projects/dcr/corner.png"
        alt="corner"
        className={styles.dcrMainCorner}
      />
    </section>
  );
};

export default Main;
