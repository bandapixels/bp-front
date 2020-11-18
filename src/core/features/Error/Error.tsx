import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import Article from "./components/Article/Article";
import styles from "./error.module.scss";
import { AppState } from "../../store/store";
import { getAllPosts } from "../BlogPage/blogPage.selectors";
import { GetPosts } from "../BlogPage/blogPage.actions";

const Error: React.FunctionComponent = () => {
  const dispatch = useDispatch();
  const refGridWrapper = useRef<HTMLDivElement>();
  const getArticles = useSelector((state: AppState) => getAllPosts(state));
  const articles = getArticles.length
    ? getArticles
    : [
        {
          image: "/images/404.gif",
          title: "Design in business",
          date: "2020-06-21T20:10:13.000000Z",
          description:
            "A problem is considered to be major when a reasonable consumer would not have bought the product if they had known the problem beforehand – for example, a toaster breaks down before \n" +
            "a reasonable consumer would expect it to.",
          url: "/blog"
        },
        {
          image: "/images/404.gif",
          title: "The right choice is the right business",
          date: "2020-10-26T07:27:32.000000Z",
          description:
            "A problem is considered to be major when a reasonable consumer would not have bought the product if they had known the problem beforehand – for example, a toaster breaks down before \n" +
            "a reasonable consumer would expect it to.",
          url: "/blog"
        }
      ];

  useEffect(() => {
    dispatch(new GetPosts());
  }, []);

  return (
    <section className={styles.wrapper404} ref={refGridWrapper}>
      <div className={styles.animation404}>
        <div className={styles.error404}>
          <p>Error!</p>
          <p>Page not found</p>
        </div>
        <img src="/images/404.gif" alt="animation 404" />
        <img
          src="/images/404-grid.png"
          alt="error grid"
          className={styles.errorGrid}
        />
      </div>
      {articles?.length ? (
        <div className={styles.blogWrapper404}>
          {articles.map(({ image, title, date, description, url }) => (
            <Article
              title={title}
              image={image}
              date={date}
              description={description}
              url={url}
              key={title}
            />
          ))}
        </div>
      ) : null}
    </section>
  );
};

export default Error;
