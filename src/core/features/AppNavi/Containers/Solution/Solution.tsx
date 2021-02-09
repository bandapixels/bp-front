import { symlink } from "fs";
import React from "react";
import AnimationOnScroll, {
  AnimationNames,
} from "../../../../utils/AnimationOnScroll/AnimationOnScroll";
import styles from "./solution.module.scss";

const Solution: React.FunctionComponent = () => {
  return (
    <section className={styles.solutionWrapper}>
      <div className={styles.solutionContainer}>
        <div className={styles.solutionContent}>
          <AnimationOnScroll
            animationName={AnimationNames.fadeInUp}
            duration={1}
          >
            <h3 className="appNaviH3">Solution</h3>
          </AnimationOnScroll>
          <AnimationOnScroll
            animationName={AnimationNames.fadeInUp}
            duration={1}
            delay={0.25}
          >
            <div className={styles.solutionSubtitle}>
              <p className="appNaviParagraph appNaviSolutionSubtitle mb-30">
                To follow users’ actions, a full real-time tracking system was
                implemented, using TypeScript and JavaScript. That allowed us to
                catch users’ actions and, depending on the screen area that they
                hover on, suggest them the next action, such as showing tips,
                clicking on the button or entering some text.
              </p>

              <p className="appNaviParagraph appNaviSolutionSubtitle">
                To customize, change and update the routes, we integrated an
                editing feature, so that the admin can easily edit or add new
                features, as well as create new routes.
              </p>
            </div>
          </AnimationOnScroll>
        </div>
      </div>
    </section>
  );
};

export default Solution;
