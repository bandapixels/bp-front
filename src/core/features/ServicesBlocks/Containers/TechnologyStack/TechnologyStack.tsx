import React, { useEffect, useRef } from "react";
import Tabs from "./components/Tabs/Tabs";
import Tab from "./components/Tab/Tab";
import { createGrid, addAnimationToGrid } from "../../../../utils/grid";
import styles from "./technologyStack.module.scss";

const TechnologyStack: React.FunctionComponent = () => {
  const refGridWrapper = useRef<HTMLDivElement>();

  useEffect(() => {
    const mainWrapper = refGridWrapper.current;

    createGrid(mainWrapper, 75);

    document.addEventListener("mousemove", e => {
      addAnimationToGrid(e, "rgba(23,23,24,.1)", "#fff", mainWrapper);
    });
  });

  return (
    <section
      className={styles.technologyWrapper}
      ref={refGridWrapper}
      data-header="full-yellow"
    >
      <div className={styles.technologyContainer}>
        <h1>Technology stack</h1>
        <Tabs>
          <Tab label="Web frontend">
            <div className={styles.technologyType}>
              <h3>Web frontend</h3>
              <p>
                We create modern, mobile-friendly web apps with React and
                Angular, applying the best practices of building a scalable and
                performant web app.
              </p>
              <div className={styles.technologyIcons}>
                <img
                  src="/images/icons/technologies/frontend/js.svg"
                  alt="javascript"
                />
                <img
                  src="/images/icons/technologies/frontend/html.svg"
                  alt="html 5"
                />
                <img
                  src="/images/icons/technologies/frontend/react.svg"
                  alt="react"
                />
                <img
                  src="/images/icons/technologies/frontend/css.svg"
                  alt="css 3"
                />
                <img
                  src="/images/icons/technologies/frontend/webpack.svg"
                  alt="webpack"
                />
                <img
                  src="/images/icons/technologies/stackoverflow.svg"
                  alt="stackoverflow"
                />
              </div>
            </div>
          </Tab>
          <Tab label="Backend">
            <div className={styles.technologyType}>
              <h3>Backend</h3>
              <p>
                We focus on higly acailalbe, easily maintainable app. We deliver
                distrilnted backend solutons that can handle the load and
                deliver value to your business.
              </p>
              <div className={styles.technologyIcons}>
                <img
                  src="/images/icons/technologies/backend/node.svg"
                  alt="node.js"
                />
                <img
                  src="/images/icons/technologies/stackoverflow.svg"
                  alt="stackoverflow"
                />
                <img
                  src="/images/icons/technologies/backend/php.svg"
                  alt="php"
                />
                <img
                  src="/images/icons/technologies/backend/symfony.svg"
                  alt="symfony"
                />
                <img
                  src="/images/icons/technologies/backend/laravel.svg"
                  alt="laravel"
                />
              </div>
            </div>
          </Tab>
          <Tab label="Databases">
            <div className={styles.technologyType}>
              <h3>Databases</h3>
              <p>
                We choose the best data storage for building your product from a
                variety of SQL and n6 SQL databases.
              </p>
              <div className={styles.technologyIcons}>
                <img
                  src="/images/icons/technologies/databases/sql.svg"
                  alt="MySQL"
                />
                <img
                  src="/images/icons/technologies/databases/mongo.svg"
                  alt="MongoDB"
                />
                <img
                  src="/images/icons/technologies/databases/postgre.svg"
                  alt="PostgreSQL"
                />
                <img
                  src="/images/icons/technologies/databases/elastic.svg"
                  alt="Elasticsearch"
                />
                <img
                  src="/images/icons/technologies/databases/redis.svg"
                  alt="Redis"
                />
                <img
                  src="/images/icons/technologies/stackoverflow.svg"
                  alt="stackoverflow"
                />
              </div>
            </div>
          </Tab>
          <Tab label="Infrastructure">
            <div className={styles.technologyType}>
              <h3>Infrastructure</h3>
              <p>
                We follow No-Ops and automation philosophy which saves you
                money. We build secure cloud-based infrastructure for your app.
                Using AWS and GCO.
              </p>
              <div className={styles.technologyIcons}>
                <img
                  src="/images/icons/technologies/infrastructure/aws.svg"
                  alt="AWS Cloud"
                />
                <img
                  src="/images/icons/technologies/infrastructure/google.svg"
                  alt="Google Cloud"
                />
                <img
                  src="/images/icons/technologies/infrastructure/github.svg"
                  alt="Github"
                />
                <img
                  src="/images/icons/technologies/infrastructure/nginx.svg"
                  alt="Nginx"
                />
              </div>
            </div>
          </Tab>
        </Tabs>
      </div>
    </section>
  );
};

export default TechnologyStack;
