import { IPost } from "@/interfaces/IPost";
import styles from "./Post.module.scss";
import { Link } from "react-router-dom";

interface IPostProps {
  post: IPost;
}

const Post = ({ post }: IPostProps) => {
  return (
    <Link to={`/blog/${post.id}`} className={styles.post}>
      <img src={post.photos[0]} alt='Заставка' className={styles.img} />
      <div className={styles.content}>
        <h3 className={styles.postTitle}>{post.title}</h3>
        <p className={styles.postDescription}>{post.description}</p>
        {/* TODO: Поменять на <date> */}
        <p className={styles.postDate}>{post.createdTime}</p>
      </div>
    </Link>
  );
};

export default Post;
