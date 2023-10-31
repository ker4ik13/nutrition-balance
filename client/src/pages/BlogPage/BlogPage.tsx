import HelloScreen from "@/widgets/HelloScreen";
import styles from "./BlogPage.module.scss";
import Title from "@/shared/Title/Title";
import Post from "@/widgets/Post/Post";
import { useEffect, useState } from "react";
import { IPost } from "@/interfaces/IPost";

// TODO: mock posts
import { posts } from "@/data/posts";

const BlogPage = () => {
  const [allPosts, setAllPosts] = useState<IPost[]>([]);
  const [showPosts, setShowPosts] = useState(4);

  useEffect(() => {
    setAllPosts(posts);
  }, []);

  const showMorePosts = () => {
    setShowPosts((prev) => prev + 4);
  };

  return (
    <div className={styles.blogPage}>
      <HelloScreen />
      <div className="container">
        <div className={styles.wrapper}>
          <Title text={"Мой блог"} />
          <div className={styles.posts}>
            {/* TODO: пофиксить пагинацию постов */}
            {allPosts.slice(-showPosts).map((post, index) => (
              <Post post={post} key={index} />
            ))}
          </div>
          {showPosts < allPosts.length && (
            <button
              type="button"
              className={styles.showMoreButton}
              onClick={showMorePosts}
            >
              Показать еще
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
