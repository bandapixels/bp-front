import React from "react";
import styles from "./main.module.scss";

const Main: React.FunctionComponent = () => {
  return (
    <section className={styles.dcrMain}>
      <div className={styles.dcrMainWrapper}>
        <div className={styles.dcrMainImages}>
          <div className={styles.dcrMainImagesRow}>
            <div className={styles.dcrMainLogo}>
              <img src="/images/projects/dcr/dcr-logo.png" alt="dcr logo" />
            </div>
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
            <h3>О компании</h3>
            <p>
              DCR Solutions – инновационная датская IT-компания, которая
              занимается диджитализацей сложных рабочих процессов и конечно же,
              разработкой поддерживаемых пользователями IT-систем.
            </p>
            <p>
              На своей платформе они создают различные графики и схемы для
              отображения статистики, которые пошагово помогают решить проблемы,
              возникающие в бизнесе, связанные с привлечением нового персонала,
              расходами компании, процессом страхования.
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
