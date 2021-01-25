import React from "react";
import AnimationOnScroll, {
  AnimationNames
} from "../../../../utils/AnimationOnScroll/AnimationOnScroll";
import styles from "./solutions.module.scss";

const Solutions: React.FunctionComponent = () => {
  return (
    <section className={styles.solutionSection}>
      <div className={styles.solutionSteps}>
        <img src="/images/projects/SunUp/solution.png" alt="sunup challenge" />
      </div>
      <div className={styles.solutionInfo}>
        <AnimationOnScroll
          animationName={AnimationNames.fadeInUp}
          duration={0.7}
        >
          <h3>Solution</h3>
        </AnimationOnScroll>
        <div className={styles.solutionList}>
          <div className={styles.solutionItem}>
            <AnimationOnScroll
              animationName={AnimationNames.zoomIn}
              duration={0.7}
            >
              <div className="solutionPulse">
                <div className="solutionPulse-inner" />
                <div className="solutionPulse-cover" />
              </div>
            </AnimationOnScroll>
            <AnimationOnScroll
              animationName={AnimationNames.fadeInUp}
              duration={0.7}
            >
              <p>
                The main design task was to enable the user to take less steps
                to create the layout of solar panels. The solution was to show
                the steps using Wizard Design and show the instruments for
                creating the layout of solar panels in easiest way.
              </p>
            </AnimationOnScroll>
          </div>
          <div className={styles.solutionItem}>
            <AnimationOnScroll
              animationName={AnimationNames.zoomIn}
              duration={0.7}
              delay={0.1}
            >
              <div className="solutionPulse">
                <div className="solutionPulse-inner" />
                <div className="solutionPulse-cover" />
              </div>
            </AnimationOnScroll>
            <AnimationOnScroll
              animationName={AnimationNames.fadeInUp}
              duration={0.7}
              delay={0.1}
            >
              <p>
                To optimize implementation time, it was decided to use a
                ready-made library Material UI. It also has an advantage of
                being easy to configure, in case of adding new features in the
                future.
              </p>
            </AnimationOnScroll>
          </div>
          <div className={styles.solutionItem}>
            <AnimationOnScroll
              animationName={AnimationNames.zoomIn}
              duration={0.7}
              delay={0.2}
            >
              <div className="solutionPulse">
                <div className="solutionPulse-inner" />
                <div className="solutionPulse-cover" />
              </div>
            </AnimationOnScroll>
            <AnimationOnScroll
              animationName={AnimationNames.fadeInUp}
              duration={0.7}
              delay={0.1}
            >
              <p>
                To show the design of solar panels on the roof in 3D, we used
                ThreeJS. To set the roof dimensions according to real area scale
                and place panels on the roof tops then, we used FabricJS.
              </p>
            </AnimationOnScroll>
          </div>
          <div className={styles.solutionItem}>
            <AnimationOnScroll
              animationName={AnimationNames.zoomIn}
              duration={0.7}
              delay={0.3}
            >
              <div className="solutionPulse">
                <div className="solutionPulse-inner" />
                <div className="solutionPulse-cover" />
              </div>
            </AnimationOnScroll>
            <AnimationOnScroll
              animationName={AnimationNames.fadeInUp}
              duration={0.7}
              delay={0.1}
            >
              <p>
                Since the user has to work with forms to enter roof data and
                choose module parameters, React-hook-form was the best solution
                for this purpose.
              </p>
            </AnimationOnScroll>
          </div>
          <div className={styles.solutionItem}>
            <AnimationOnScroll
              animationName={AnimationNames.zoomIn}
              duration={0.7}
              delay={0.4}
            >
              <div className="solutionPulse">
                <div className="solutionPulse-inner" />
                <div className="solutionPulse-cover" />
              </div>
            </AnimationOnScroll>
            <AnimationOnScroll
              animationName={AnimationNames.fadeInUp}
              duration={0.7}
              delay={0.1}
            >
              <p>
                Working with an existing back-end, we used Redux-saga and Axios
                to contact the server. Redux was used for convenient state
                management of the application.
              </p>
            </AnimationOnScroll>
          </div>
        </div>
        <img
          src="/images/projects/SunUp/solution-inter.png"
          alt="sunup challenge interface"
        />
      </div>
    </section>
  );
};

export default Solutions;
