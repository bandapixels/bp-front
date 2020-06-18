import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import useGrid from "../../../../utils/useGrid";
import AnimatedLine from "../../../../shared/AnimatedLine/AnimatedLine";
import { getPosts } from "../../blogPage.actions";
import { getAllPosts } from "../../blogPage.selectors";
import useRedrawGrid from "../../../../utils/useRedrawGrid";
import { AppState } from "../../../../store/store";
import styles from "./posts.module.scss";

const Posts: React.FunctionComponent = () => {
  const dispatch = useDispatch();
  dispatch(getPosts());
  const refGridWrapper = useRef<HTMLDivElement>();
  const postsData = useSelector((state: AppState) => getAllPosts(state));

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
            <a
              className={styles.blogItem}
              key={post.head}
              href={`/blog/${post.slug}`}
            >
              <div className={styles.blogImage}>
                <img src={post.image} alt={post.head} />
              </div>
              <div className={styles.postInfo}>
                <h4>{post.head}</h4>
                <p className={styles.postTime}>{post.created_at}</p>
                <div className={styles.hashtags}>
                  {post.tags.map((hashtag, index) => {
                    const key = hashtag + index;

                    return <span key={key}>{hashtag}</span>;
                  })}
                </div>
                <div className={styles.postAnnotation}>{post.excerpt}</div>
                <p className={styles.postReadMore}>Read more</p>
              </div>
            </a>
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
