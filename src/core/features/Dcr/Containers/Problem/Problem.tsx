import React from "react";
import styles from "./problem.module.scss";

const Problem: React.FunctionComponent = () => {
  return (
    <section className={styles.dcrProblem}>
      <img
        src="/images/projects/dcr/design-map-left.png"
        className={styles.dcrProblemMapLeft}
        alt="map-left"
      />
      <img
        src="/images/projects/dcr/design-map-right.png"
        className={styles.dcrProblemMapRight}
        alt="map-right"
      />
      <div className={styles.dcrProblemContent}>
        <div className={styles.dcrProblemWrapper}>
          <img
            src="/images/projects/dcr/problem.png"
            className={styles.dcrProblemProblemImage}
            alt="problem"
          />
          <h3>Проблема</h3>
          <div className={styles.dcrProblemText}>
            <div>
              <p>
                Не смотря на популярность платформы и высокий уровень
                востребованности услуг, от клиентов компании начали поступать
                жалобы касательно удобства пользования сервисом.
              </p>
              <p>
                В связи с неудобным и трудным UX дизайном, который усложнял
                поиск решения проблемы, а также из-за устаревшего и хаотичного
                UI дизайна, популярность сервиса начала значительно падать. Как
                результат – появление оттока клиентов.
              </p>
            </div>
            <div>
              <p>
                Так как портал нацелен на решение огромного количества
                клиентских задач, однако не имеет общую налаженную систему,
                клиенты не могли быстро и просто достичь своих главных целей, а
                значит ключевая функция портала не могла быть успешно
                выполненной.{" "}
              </p>
            </div>
          </div>
        </div>
        <div className={styles.dcrVideo}>
          <video
            src="/videos/projects/dcr/dcr.mp4"
            controls={false}
            autoPlay
            muted
            loop
          />
        </div>
      </div>
      <div className={styles.dcrColorsFull}>
        <img
          src="/images/projects/dcr/colors.png"
          className={styles.dcrProblemColorsImage}
          alt="colors"
        />
        <div className={styles.dcrColors}>
          <div className={styles.dcrColorsList}>
            <div className={styles.dcrColorsItem}>
              <div>162B43</div>
            </div>
            <div className={styles.dcrColorsItem}>
              <div>42A7E4</div>
            </div>
            <div className={styles.dcrColorsItem}>
              <div>9FDBFF</div>
            </div>
            <div className={styles.dcrColorsItem}>
              <div>F7685B</div>
            </div>
            <div className={styles.dcrColorsItem}>
              <div>F59D12</div>
            </div>
            <div className={styles.dcrColorsItem}>
              <div>2ED47A</div>
            </div>
          </div>
          <div className={styles.dcrColorsText}>
            <h3>Цвета и UI кит</h3>
            <p>
              Так как у клиента уже был готовый логотип с 4 основными цветами –
              желто-оранжевым, красным, синим и зеленым, мы предпочли
              придерживаться именно такой цветовой гаммы, чтобы сохранить
              концепцию сайта, а так же общее восприятие и ассоциации сервиса и
              компании клиентами.
            </p>
            <p>
              Исходя их этих цветов мы разработали индивидуальный UI кит для
              единой стилистики сайта с различными элементами, плажками,
              чекбоксами, кнопками, выполненными в стиле компании.
            </p>
            <p>
              Одним из основных цветов сайта был выбран синий цвет и разные его
              оттенки, в связи с тем, что он отлично сочетается с SAAS, и
              ассоциируется со стабильностью, прочностью, надежностью, не
              отвлекает внимания и не вызывает негативных эмоций.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
