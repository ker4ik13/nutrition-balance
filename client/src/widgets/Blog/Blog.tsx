import Title from "@/shared/Title/Title";
import styles from "./Blog.module.scss";
import { posts } from "@/data/posts";
import { Link } from "react-router-dom";
import Post from "../Post/Post";

const Blog = () => {
  return (
    <div className={styles.blogPage}>
      <div className='container'>
        <div className={styles.wrapper}>
          <Title text={"Мой блог"} />
          <div className={styles.posts}>
            {posts.map((post, index) => (
              <Post post={post} key={index} />
            ))}
          </div>
          <Link to={`/blog`} className={styles.allPosts}>
            Смотреть все новости
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Blog;
