import React, { useRef } from "react";
import Tabs from "./components/Tabs/Tabs";
import Tab from "./components/Tab/Tab";
import useGrid from "../../../../utils/useGrid";
import AnimatedLine from "../../../../shared/AnimatedLine/AnimatedLine";
import styles from "./technologyStack.module.scss";
import useRedrawGrid from "../../../../utils/useRedrawGrid";

const TechnologyStack: React.FunctionComponent = () => {
  const refGridWrapper = useRef<HTMLDivElement>();

  useGrid(refGridWrapper, "rgba(23,23,24,0.1)", "#fff");
  useRedrawGrid(refGridWrapper);

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
                <div className={styles.technologyIconsItem}>
                  <div className={styles.technologyIconsWrapper}>
                    <img
                      src="/images/icons/technologies/frontend/js.svg"
                      alt="javascript"
                    />
                    <div className={styles.technologyIconsHover}>
                      <img
                        src="/images/icons/technologies/frontend/js-hover.svg"
                        alt="javascript"
                      />
                    </div>
                  </div>
                  <p>javascript</p>
                </div>
                <div className={styles.technologyIconsItem}>
                  <div className={styles.technologyIconsWrapper}>
                    <img
                      src="/images/icons/technologies/frontend/html.svg"
                      alt="html 5"
                    />
                    <div className={styles.technologyIconsHover}>
                      <img
                        src="/images/icons/technologies/frontend/html-hover.svg"
                        alt="javascript"
                      />
                    </div>
                  </div>
                  <p>HTML 5</p>
                </div>
                <div className={styles.technologyIconsItem}>
                  <div className={styles.technologyIconsWrapper}>
                    <img
                      src="/images/icons/technologies/frontend/react.svg"
                      alt="react"
                    />
                    <div className={styles.technologyIconsHover}>
                      <img
                        src="/images/icons/technologies/frontend/react-hover.svg"
                        alt="javascript"
                      />
                    </div>
                  </div>
                  <p>React</p>
                </div>
                <div className={styles.technologyIconsItem}>
                  <div className={styles.technologyIconsWrapper}>
                    <img
                      src="/images/icons/technologies/frontend/css.svg"
                      alt="css 3"
                    />
                    <div className={styles.technologyIconsHover}>
                      <img
                        src="/images/icons/technologies/frontend/css-hover.svg"
                        alt="css 3"
                      />
                    </div>
                  </div>
                  <p>CSS 3</p>
                </div>
                <div className={styles.technologyIconsItem}>
                  <div className={styles.technologyIconsWrapper}>
                    <img
                      src="/images/icons/technologies/frontend/webpack.svg"
                      alt="webpack"
                    />
                    <div className={styles.technologyIconsHover}>
                      <img
                        src="/images/icons/technologies/frontend/webpack-hover.svg"
                        alt="webpack"
                      />
                    </div>
                  </div>
                  <p>Webpack</p>
                </div>
                <div className={styles.technologyIconsItem}>
                  <div className={styles.technologyIconsWrapper}>
                    <img
                      src="/images/icons/technologies/stackoverflow.svg"
                      alt="stackoverflow"
                    />
                    <div className={styles.technologyIconsHover}>
                      <img
                        src="/images/icons/technologies/stackoverflow-hover.svg"
                        alt="stackoverflow"
                      />
                    </div>
                  </div>
                  <p>Stackoverflow</p>
                </div>
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
                <div className={styles.technologyIconsItem}>
                  <div className={styles.technologyIconsWrapper}>
                    <img
                      src="/images/icons/technologies/backend/node.svg"
                      alt="node.js"
                    />
                    <div className={styles.technologyIconsHover}>
                      <img
                        src="/images/icons/technologies/backend/node-hover.svg"
                        alt="node.js"
                      />
                    </div>
                  </div>
                  <p>Node.js</p>
                </div>
                <div className={styles.technologyIconsItem}>
                  <div className={styles.technologyIconsWrapper}>
                    <img
                      src="/images/icons/technologies/stackoverflow.svg"
                      alt="stackoverflow"
                    />
                    <div className={styles.technologyIconsHover}>
                      <img
                        src="/images/icons/technologies/stackoverflow-hover.svg"
                        alt="stackoverflow"
                      />
                    </div>
                  </div>
                  <p>Stackoverflow</p>
                </div>
                <div className={styles.technologyIconsItem}>
                  <div className={styles.technologyIconsWrapper}>
                    <img
                      src="/images/icons/technologies/backend/php.svg"
                      alt="php"
                    />
                    <div className={styles.technologyIconsHover}>
                      <img
                        src="/images/icons/technologies/backend/php-hover.svg"
                        alt="php"
                      />
                    </div>
                  </div>
                  <p>PHP</p>
                </div>
                <div className={styles.technologyIconsItem}>
                  <div className={styles.technologyIconsWrapper}>
                    <img
                      src="/images/icons/technologies/backend/symfony.svg"
                      alt="symfony"
                    />
                    <div className={styles.technologyIconsHover}>
                      <img
                        src="/images/icons/technologies/backend/symfony-hover.svg"
                        alt="symfony"
                      />
                    </div>
                  </div>
                  <p>Symfony</p>
                </div>
                <div className={styles.technologyIconsItem}>
                  <div className={styles.technologyIconsWrapper}>
                    <img
                      src="/images/icons/technologies/backend/laravel.svg"
                      alt="laravel"
                    />
                    <div className={styles.technologyIconsHover}>
                      <img
                        src="/images/icons/technologies/backend/laravel-hover.svg"
                        alt="laravel"
                      />
                    </div>
                  </div>
                  <p>Laravel</p>
                </div>
              </div>
            </div>
          </Tab>
          <Tab label="Databases">
            <div className={styles.technologyType}>
              <h3>Databases</h3>
              <p>
                We choose the best data storage for building your product from a
                variety of SQL and no SQL databases.
              </p>
              <div className={styles.technologyIcons}>
                <div className={styles.technologyIconsItem}>
                  <div className={styles.technologyIconsWrapper}>
                    <img
                      src="/images/icons/technologies/databases/sql.svg"
                      alt="MySQL"
                    />
                    <div className={styles.technologyIconsHover}>
                      <img
                        src="/images/icons/technologies/databases/sql-hover.svg"
                        alt="MySQL"
                      />
                    </div>
                  </div>
                  <p>My SQL</p>
                </div>
                <div className={styles.technologyIconsItem}>
                  <div className={styles.technologyIconsWrapper}>
                    <img
                      src="/images/icons/technologies/databases/mongo.svg"
                      alt="MongoDB"
                    />
                    <div className={styles.technologyIconsHover}>
                      <img
                        src="/images/icons/technologies/databases/mongo-hover.svg"
                        alt="MongoDB"
                      />
                    </div>
                  </div>
                  <p>MongoDB</p>
                </div>
                <div className={styles.technologyIconsItem}>
                  <div className={styles.technologyIconsWrapper}>
                    <img
                      src="/images/icons/technologies/databases/postgre.svg"
                      alt="PostgreSQL"
                    />
                    <div className={styles.technologyIconsHover}>
                      <img
                        src="/images/icons/technologies/databases/postgre-hover.svg"
                        alt="PostgreSQL"
                      />
                    </div>
                  </div>
                  <p>PostgreSQL</p>
                </div>
                <div className={styles.technologyIconsItem}>
                  <div className={styles.technologyIconsWrapper}>
                    <img
                      src="/images/icons/technologies/databases/elastic.svg"
                      alt="Elasticsearch"
                    />
                    <div className={styles.technologyIconsHover}>
                      <img
                        src="/images/icons/technologies/databases/elastic-hover.svg"
                        alt="Elasticsearch"
                      />
                    </div>
                  </div>
                  <p>Elasticsearch</p>
                </div>
                <div className={styles.technologyIconsItem}>
                  <div className={styles.technologyIconsWrapper}>
                    <img
                      src="/images/icons/technologies/databases/redis.svg"
                      alt="Redis"
                    />
                    <div className={styles.technologyIconsHover}>
                      <img
                        src="/images/icons/technologies/databases/redis-hover.svg"
                        alt="Redis"
                      />
                    </div>
                  </div>
                  <p>Redis</p>
                </div>
                <div className={styles.technologyIconsItem}>
                  <div className={styles.technologyIconsWrapper}>
                    <img
                      src="/images/icons/technologies/stackoverflow.svg"
                      alt="stackoverflow"
                    />
                    <div className={styles.technologyIconsHover}>
                      <img
                        src="/images/icons/technologies/stackoverflow-hover.svg"
                        alt="stackoverflow"
                      />
                    </div>
                  </div>
                  <p>Stackoverflow</p>
                </div>
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
                <div className={styles.technologyIconsItem}>
                  <div className={styles.technologyIconsWrapper}>
                    <img
                      src="/images/icons/technologies/infrastructure/aws.svg"
                      alt="AWS Cloud"
                    />
                    <div className={styles.technologyIconsHover}>
                      <img
                        src="/images/icons/technologies/infrastructure/aws-hover.svg"
                        alt="AWS Cloud"
                      />
                    </div>
                  </div>
                  <p>AWS Cloud</p>
                </div>
                <div className={styles.technologyIconsItem}>
                  <div className={styles.technologyIconsWrapper}>
                    <img
                      src="/images/icons/technologies/infrastructure/google.svg"
                      alt="Google Cloud"
                    />
                    <div className={styles.technologyIconsHover}>
                      <img
                        src="/images/icons/technologies/infrastructure/google-hover.svg"
                        alt="Google Cloud"
                      />
                    </div>
                  </div>
                  <p>Google Cloud</p>
                </div>
                <div className={styles.technologyIconsItem}>
                  <div className={styles.technologyIconsWrapper}>
                    <img
                      src="/images/icons/technologies/infrastructure/github.svg"
                      alt="Github"
                    />
                    <div className={styles.technologyIconsHover}>
                      <img
                        src="/images/icons/technologies/infrastructure/github-hover.svg"
                        alt="Github"
                      />
                    </div>
                  </div>
                  <p>Github</p>
                </div>
                <div className={styles.technologyIconsItem}>
                  <div className={styles.technologyIconsWrapper}>
                    <img
                      src="/images/icons/technologies/infrastructure/nginx.svg"
                      alt="Nginx"
                    />
                    <div className={styles.technologyIconsHover}>
                      <img
                        src="/images/icons/technologies/infrastructure/nginx-hover.svg"
                        alt="Nginx"
                      />
                    </div>
                  </div>
                  <p>Nginx</p>
                </div>
              </div>
            </div>
          </Tab>
        </Tabs>
      </div>
      <AnimatedLine backgroundColor="#333" filledColor="#fff" />
    </section>
  );
};

export default TechnologyStack;
