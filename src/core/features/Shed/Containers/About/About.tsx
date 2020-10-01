import React from "react";
import styles from "./about.module.scss";

const About: React.FunctionComponent = () => {
  return (
    <section className={styles.shredAbout}>
      <div className={styles.shredAboutWrapper}>
        <div className={styles.shredAboutImg}>
          <img src="/images/projects/Shred/about.png" alt="Shed about" />
        </div>
        <div className={styles.shredAboutContent}>
          <h3>About</h3>
          <p>
            <span>The Shed</span> is a service where you can find everything you
            need - rent or lease the equipment and goods for any situation. Now
            you do not have to buy things that you need to use only once or for
            a short period of time, you can just rent them. Take advantage of
            The Shed and offer something for rent; things that lie idle and do
            not bring joy and profit with this rental service turn into a
            valuable acquisition. The storage warehouse is free to use and you
            can store everything available for rent not in your apartment, but
            in the company's warehouse. An owner can pick up their stuff at any
            time if the item is in stock.
          </p>
        </div>
      </div>
      <div className={styles.shredAboutDecor}>
        <img src="/images/projects/Shred/logo-grey.png" alt="Shed about" />
      </div>
      <div className={styles.shredAboutWrapper}>
        <div className={styles.shredAboutContentSecond}>
          <p>
            To sum up, <span>The Shed</span> provides several advantages -
            unnecessary things do not consume additional space, a passive
            acquisition turns into an active one, one can save money by not
            buying a necessary product for the full cost but by renting
            everything they need, doing it all on one resource without
            contacting each owner individually. Furthermore, if you care about
            the environment, renting is better than producing an endless amount
            of new goods. After all, many acquisitions do not go out of
            operation, they simply take up space in our garages. The consumer
            potential of the planet is unlimited, but new production only
            pollutes the environment.
          </p>
        </div>
        <div className={styles.shredAboutImg}>
          <img src="/images/projects/Shred/about-2.png" alt="Shed about" />
        </div>
      </div>
      <div className={styles.shredAboutVideo}>
        <img src="/images/projects/Shred/animation.gif" alt="video" />
      </div>
    </section>
  );
};

export default About;
