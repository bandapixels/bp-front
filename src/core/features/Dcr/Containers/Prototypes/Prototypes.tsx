import React from "react";
import useIsMobile from "../../../../utils/useIsMobile";
import AnimationOnScroll, {
  AnimationNames
} from "../../../../utils/AnimationOnScroll/AnimationOnScroll";
import styles from "./prototypes.module.scss";

const Prototypes: React.FunctionComponent = () => {
  const isMobile = useIsMobile();

  return (
    <section className={styles.dcrPrototypes}>
      <div className={styles.dcrPrototypesWrapper}>
        <img
          src="/images/projects/dcr/wireframe.png"
          className={styles.dcrPrototypesWireframeImage}
          alt="wireframe"
        />
        <img
          src="/images/projects/dcr/prototypes-map.png"
          className={styles.dcrPrototypesMap}
          alt="prototypes map"
        />
        <div className={styles.dcrPrototypesTextWrapper}>
          <AnimationOnScroll
            animationName={AnimationNames.fadeInUp}
            duration={1}
          >
            <h3>Прототипы</h3>
          </AnimationOnScroll>
          <div className={styles.dcrPrototypesText}>
            <div>
              <p>
                <AnimationOnScroll
                  animationName={AnimationNames.fadeInUp}
                  duration={1}
                  as="span"
                  delay={0.5}
                >
                  Прототип позволил ускорить весь процесс создания дизайна,
                  увидеть целостную картину всего приложения, а также
                  использовать бюджет проекта более рациональным образом.
                </AnimationOnScroll>
              </p>
              <p>
                <AnimationOnScroll
                  animationName={AnimationNames.fadeInUp}
                  duration={1}
                  as="span"
                  delay={0.7}
                >
                  Исходя из аналитики мы создали свою версию расположения
                  элементов и блоков на портале, прибегая к минимальным
                  изменениям на сайте, чтобы не усложнять дальнейшее
                  взаимодействие пользователей с сервисом.
                </AnimationOnScroll>
              </p>
            </div>
            <div>
              <p>
                <AnimationOnScroll
                  animationName={AnimationNames.fadeInUp}
                  duration={1}
                  as="span"
                  delay={0.9}
                >
                  Благодаря прототипу, клиент смог наглядно увидеть изменения и
                  оценить новые возможности своего продукта. Кроме того, мы
                  придумали несколько новых полезных пользовательских сценариев.
                </AnimationOnScroll>
              </p>
              <p>
                <AnimationOnScroll
                  animationName={AnimationNames.fadeInUp}
                  duration={1}
                  as="span"
                  delay={1.1}
                >
                  Таким образом, нам удалось существенно повысить уровень
                  удобства использования портала DCR Solutions.
                </AnimationOnScroll>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.dcrPrototypesImagesWrapper}>
        {isMobile ? (
          <>
            <img
              src="/images/projects/dcr/prototypes-1-mobile.png"
              alt="prototypes layouts"
            />
            <img
              src="/images/projects/dcr/prototypes-2-mobile.png"
              alt="prototypes layouts"
            />
            <img
              src="/images/projects/dcr/prototypes-3-mobile.png"
              alt="prototypes layouts"
            />
            <img
              src="/images/projects/dcr/prototypes-4-mobile.png"
              alt="prototypes layouts"
            />
            <p>20+ экранов</p>
          </>
        ) : (
          <img
            src="/images/projects/dcr/prototypes-images.png"
            alt="prototypes layouts"
          />
        )}
      </div>
    </section>
  );
};

export default Prototypes;