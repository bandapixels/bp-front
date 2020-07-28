import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import useGrid from "../../../../utils/useGrid";
import AnimatedLine from "../../../../shared/AnimatedLine/AnimatedLine";
import { GetPosts } from "../../blogPage.actions";
import { getAllPosts } from "../../blogPage.selectors";
import useRedrawGrid from "../../../../utils/useRedrawGrid";
import { AppState } from "../../../../store/store";
import styles from "./posts.module.scss";

const Posts: React.FunctionComponent = () => {
  const dispatch = useDispatch();
  const refGridWrapper = useRef<HTMLDivElement>();
  const postsData = useSelector((state: AppState) => getAllPosts(state));

  const formatDate = (date: string): string => {
    const publishDate = new Date(date);

    return publishDate.toDateString();
  };

  useEffect(() => {
    dispatch(new GetPosts());
  }, []);

  useGrid(refGridWrapper, "rgba(23,23,24,0.1)", "#fff");
  useRedrawGrid(refGridWrapper);

  return (
    <section
      className={styles.blogWrapper}
      ref={refGridWrapper}
      data-header="full-yellow"
      data-horizontal
      data-child="blogContainer"
    >
      <h1>Blog</h1>
      <div className={styles.blogContainer}>
        {postsData && postsData.length ? (
          postsData.map(post => (
            <Link key={post.head} href={`/blog/${post.slug}`}>
              <a className={styles.blogItem}>
                <div className={styles.blogImage}>
                  <img src={post.image} alt={post.head} />
                </div>
                <div className={styles.postInfo}>
                  <h4>{post.head}</h4>
                  <p className={styles.postTime}>
                    {formatDate(post.created_at)}
                  </p>
                  <div className={styles.hashtags}>
                    {post.tags.map((hashtag, index) => {
                      const key = hashtag.name + index;

                      return <span key={key}>{hashtag.name}</span>;
                    })}
                  </div>
                  <div className={styles.postAnnotation}>{post.excerpt}</div>
                  <p className={styles.postReadMore}>Read more</p>
                </div>
              </a>
            </Link>
          ))
        ) : (
          <p>No posts</p>
        )}
      </div>
      <AnimatedLine backgroundColor="#333" filledColor="#fff" />
    </section>
  );
};

export default Posts;
