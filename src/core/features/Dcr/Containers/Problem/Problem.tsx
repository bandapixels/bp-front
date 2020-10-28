import React from "react";
import AnimationOnScroll, {
  AnimationNames
} from "../../../../utils/AnimationOnScroll/AnimationOnScroll";
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
          <AnimationOnScroll
            animationName={AnimationNames.fadeInUp}
            duration={1}
          >
            <h3>Проблема</h3>
          </AnimationOnScroll>
          <div className={styles.dcrProblemText}>
            <div>
              <p>
                <AnimationOnScroll
                  animationName={AnimationNames.fadeInUp}
                  duration={1}
                  delay={0.5}
                  as="span"
                >
                  Не смотря на популярность платформы и высокий уровень
                  востребованности услуг, от клиентов компании начали поступать
                  жалобы касательно удобства пользования сервисом.
                </AnimationOnScroll>
              </p>
              <p>
                <AnimationOnScroll
                  animationName={AnimationNames.fadeInUp}
                  duration={1}
                  delay={0.7}
                  as="span"
                >
                  В связи с неудобным и трудным UX дизайном, который усложнял
                  поиск решения проблемы, а также из-за устаревшего и хаотичного
                  UI дизайна, популярность сервиса начала значительно падать.
                  Как результат – появление оттока клиентов.
                </AnimationOnScroll>
              </p>
            </div>
            <div>
              <p>
                <AnimationOnScroll
                  animationName={AnimationNames.fadeInUp}
                  duration={1}
                  delay={0.9}
                  as="span"
                >
                  Так как портал нацелен на решение огромного количества
                  клиентских задач, однако не имеет общую налаженную систему,
                  клиенты не могли быстро и просто достичь своих главных целей,
                  а значит ключевая функция портала не могла быть успешно
                  выполненной.
                </AnimationOnScroll>
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
            <AnimationOnScroll
              animationName={AnimationNames.zoomIn}
              duration={0.5}
            >
              <div
                className={`${styles.dcrColorsItem} ${styles.dcrColorsItem1}`}
              >
                <div>162B43</div>
              </div>
            </AnimationOnScroll>
            <AnimationOnScroll
              animationName={AnimationNames.zoomIn}
              duration={0.5}
              delay={0.3}
            >
              <div
                className={`${styles.dcrColorsItem} ${styles.dcrColorsItem2}`}
              >
                <div>42A7E4</div>
              </div>
            </AnimationOnScroll>
            <AnimationOnScroll
              animationName={AnimationNames.zoomIn}
              duration={0.5}
              delay={0.8}
            >
              <div
                className={`${styles.dcrColorsItem} ${styles.dcrColorsItem3}`}
              >
                <div>9FDBFF</div>
              </div>
            </AnimationOnScroll>
            <AnimationOnScroll
              animationName={AnimationNames.zoomIn}
              duration={0.5}
              delay={0.6}
            >
              <div
                className={`${styles.dcrColorsItem} ${styles.dcrColorsItem4}`}
              >
                <div>F7685B</div>
              </div>
            </AnimationOnScroll>
            <AnimationOnScroll
              animationName={AnimationNames.zoomIn}
              duration={0.5}
              delay={1.1}
            >
              <div
                className={`${styles.dcrColorsItem} ${styles.dcrColorsItem5}`}
              >
                <div>F59D12</div>
              </div>
            </AnimationOnScroll>
            <AnimationOnScroll
              animationName={AnimationNames.zoomIn}
              duration={0.5}
              delay={0.4}
            >
              <div
                className={`${styles.dcrColorsItem} ${styles.dcrColorsItem6}`}
              >
                <div>2ED47A</div>
              </div>
            </AnimationOnScroll>
          </div>
          <div className={styles.dcrColorsText}>
            <AnimationOnScroll
              animationName={AnimationNames.fadeInUp}
              duration={1}
            >
              <h3>Цвета и UI кит</h3>
            </AnimationOnScroll>
            <p>
              <AnimationOnScroll
                animationName={AnimationNames.fadeInUp}
                duration={1}
                delay={0.5}
                as="span"
              >
                Так как у клиента уже был готовый логотип с 4 основными цветами
                – желто-оранжевым, красным, синим и зеленым, мы предпочли
                придерживаться именно такой цветовой гаммы, чтобы сохранить
                концепцию сайта, а так же общее восприятие и ассоциации сервиса
                и компании клиентами.
              </AnimationOnScroll>
            </p>
            <p>
              <AnimationOnScroll
                animationName={AnimationNames.fadeInUp}
                duration={1}
                delay={0.7}
                as="span"
              >
                Исходя их этих цветов мы разработали индивидуальный UI кит для
                единой стилистики сайта с различными элементами, плажками,
                чекбоксами, кнопками, выполненными в стиле компании.
              </AnimationOnScroll>
            </p>
            <p>
              <AnimationOnScroll
                animationName={AnimationNames.fadeInUp}
                duration={1}
                delay={0.9}
                as="span"
              >
                Одним из основных цветов сайта был выбран синий цвет и разные
                его оттенки, в связи с тем, что он отлично сочетается с SAAS, и
                ассоциируется со стабильностью, прочностью, надежностью, не
                отвлекает внимания и не вызывает негативных эмоций.
              </AnimationOnScroll>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
