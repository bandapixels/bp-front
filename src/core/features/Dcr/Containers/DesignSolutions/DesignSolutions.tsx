import React from "react";
import useIsMobile from "../../../../utils/useIsMobile";
import styles from "./designSolutions.module.scss";

const DesignSolutions: React.FunctionComponent = () => {
  const isMobile = useIsMobile();

  return (
    <section className={styles.dcrDesignWrapper}>
      <img
        src="/images/projects/dcr/design-map-left.png"
        className={styles.dcrDesignMapLeft}
        alt="map-left"
      />
      <img
        src="/images/projects/dcr/design-map-right.png"
        className={styles.dcrDesignMapRight}
        alt="map-right"
      />
      <img
        src="/images/projects/dcr/corner-top.png"
        alt="corner"
        className={styles.dcrDesignCorner}
      />
      <div className={styles.dcrDesignMain}>
        <div className={styles.dcrDesignMainLeft}>
          <h3>Дизайнерские решения</h3>
          <h5>
            <span>80+</span> UI элементов создано
          </h5>
          <p>
            Во время работы над UI дизайном мы произвели редизайн всех кнопок на
            сайте, видоизменили и улучшили внешний вид, визуально расширив их и
            сделав более округлыми, оставив при этом изначальный голубой цвет,
            что помогло сохранить ассоциативные связи клиентов и упростить
            взаимодействия пользователей на сайте.
          </p>
        </div>
        <div className={styles.dcrDesignMainRight}>
          <img
            src={`/images/projects/dcr/design-solutions${
              isMobile ? "-mobile" : ""
            }.png`}
            alt=""
          />
        </div>
      </div>
      <div className={styles.dcrDesignIcons}>
        <div className={styles.dcrDesignIconsLeft}>
          <img
            src={`/images/projects/dcr/icons${isMobile ? "-mobile" : ""}.png`}
            alt=""
          />
        </div>
        <div className={styles.dcrDesignIconsRight}>
          <h5>
            <span>50+</span> Тематических иконок
          </h5>
          <p>
            Добавление единообразных иконок к определенным разделам сайта
            освежило внешний вид портала, разбавило большое количество текста,
            укрепило ассоциативные связи пользователя с конкретными действиями.
          </p>
        </div>
      </div>
      <div className={styles.dcrDesignDesigners}>
        <div className={styles.dcrDesignDesignersLeft}>
          <h5>
            <span>4</span> Креативных дизайнера
          </h5>
          <p>
            Нашей команде также удалось успешно соединить серьезную тематику
            портала и тематические изображения, не отвлекая при этом внимания
            пользователей сайта.
          </p>
        </div>
        <div className={styles.dcrDesignDesignersRight}>
          <img
            src={`/images/projects/dcr/creative-designers${
              isMobile ? "-mobile" : ""
            }.png`}
            alt=""
          />
        </div>
      </div>
      <div className={styles.dcrDesignAccents}>
        <div className={styles.dcrDesignAccentsLeft}>
          <img
            src={`/images/projects/dcr/accent${isMobile ? "-mobile" : ""}.png`}
            alt=""
          />
        </div>
        <div className={styles.dcrDesignAccentsRight}>
          <h5>
            <span>Правильные</span> акценты
          </h5>
          <p>
            Добавив больше воздуха между отдельными элементами сайта и расчертив
            границы между блоками нам удалось сделать портал визуально более
            легким, а взаимодействие на сайте более удобным.
          </p>
        </div>
      </div>
      <div className={styles.dcrDesignNavigation}>
        <div className={styles.dcrDesignNavigationLeft}>
          <h5>
            <span>Удобная</span> навигация
          </h5>
          <p>
            Путем создания чекбоксов мы улучшили процесс поиска необходимой
            информации на сайте, повысив таким образом для пользователя
            вероятность решить поставленную задачу, найти ответ.
          </p>
        </div>
        <div className={styles.dcrDesignNavigationRight}>
          <img
            src={`/images/projects/dcr/navigation${
              isMobile ? "-mobile" : ""
            }.png`}
            alt=""
          />
        </div>
      </div>
      <div className={styles.dcrDesignPopup}>
        <img src="/images/projects/dcr/popup.png" alt="" />
      </div>
    </section>
  );
};

export default DesignSolutions;
