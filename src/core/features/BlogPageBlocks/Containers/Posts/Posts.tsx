import React, { useEffect, useRef } from "react";
import { createGrid, addAnimationToGrid } from "../../../../utils/grid";

import styles from "./posts.module.scss";

const Posts: React.FunctionComponent = () => {
  const refGridWrapper = useRef<HTMLDivElement>();
  const postsData = [
    {
      name: "Design in business",
      date: "18.01.2020",
      hashtags: [
        "#design in business",
        "#tehnology in business",
        "#business",
        "#problem",
        "#tehnology",
        "#design",
        "#tehnology in business",
        "#problem- selling in business"
      ],
      annotation: `A problem is considered to be major when a reasonable consumer would not have bought the product if they had known the problem beforehand – for example, a toaster breaks down before 
      a reasonable consumer would expect it to.`,
      link: "#",
      image: "/images/blog/1.jpg"
    },
    {
      name: "Design in business",
      date: "18.01.2020",
      hashtags: [
        "#design in business",
        "#tehnology in business",
        "#business",
        "#problem",
        "#tehnology",
        "#design",
        "#tehnology in business",
        "#problem- selling in business"
      ],
      annotation: `A problem is considered to be major when a reasonable consumer would not have bought the product if they had known the problem beforehand – for example, a toaster breaks down before 
      a reasonable consumer would expect it to.`,
      link: "#",
      image: "/images/blog/2.jpg"
    },
    {
      name: "Design in business",
      date: "18.01.2020",
      hashtags: [
        "#design in business",
        "#tehnology in business",
        "#business",
        "#problem",
        "#tehnology",
        "#design",
        "#tehnology in business",
        "#problem- selling in business"
      ],
      annotation: `A problem is considered to be major when a reasonable consumer would not have bought the product if they had known the problem beforehand – for example, a toaster breaks down before 
      a reasonable consumer would expect it to.`,
      link: "#",
      image: "/images/blog/3.jpg"
    }
  ];

  useEffect(() => {
    const mainWrapper = refGridWrapper.current;

    createGrid(mainWrapper, 75, true);

    document.addEventListener("mousemove", e => {
      addAnimationToGrid(e, "rgba(23,23,24,.1)", "#fff", mainWrapper, true);
    });
  }, []);

  return (
    <section className={styles.blogWrapper} ref={refGridWrapper}>
      <h1>Blog</h1>
      <div className={styles.blogContainer}>
        {postsData.map(post => (
          <div className={styles.blogItem} key={post.name}>
            <div className={styles.blogImage}>
              <img src={post.image} alt={post.name} />
            </div>
            <div className={styles.postInfo}>
              <h4>{post.name}</h4>
              <p className={styles.postTime}>{post.date}</p>
              <div className={styles.hashtags}>
                {post.hashtags.map(hashtag => (
                  <span>{hashtag}</span>
                ))}
              </div>
              <div className={styles.postAnnotation}>{post.annotation}</div>
              <a href={post.link}>Read more</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Posts;
