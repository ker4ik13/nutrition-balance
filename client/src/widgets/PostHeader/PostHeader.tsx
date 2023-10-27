import { Link } from "react-router-dom";
import styles from "./PostHeader.module.scss";
import type { IPost } from "@/interfaces/IPost";
import Icon from "@/shared/IconsComponents/Icon";
import { Icons } from "@/shared/IconsComponents/Icons";
import { IComment } from "@/interfaces/IComment";
import { copyLink } from "@/features/copyLink";
import { setLike } from "@/features/setLike";
import { useEffect, useState } from "react";
import { setView } from "@/features/setView";

interface IPostHeaderProps {
  post: IPost;
}

const isHasComments = (comments: IComment[] | undefined) =>
  comments && comments.length > 0 ? styles.active : "";

const PostHeader = ({ post }: IPostHeaderProps) => {
  const [likes, setLikes] = useState(0);
  const [views, setViews] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      const isSetView = setView(post.id);
      if (isSetView) {
        setViews((prev) => +prev + 1);
      }
    }, 5000);
    if (post.likesCount) {
      setLikes(+post.likesCount);
    }
  }, []);

  return (
    <header className={styles.postHeader}>
      <div className='container'>
        <div className={styles.wrapper}>
          <div className={styles.linkString}>
            <Link to={"/"}>Главная</Link>
            <p>/</p>
            <Link to={"/blog"}>Блог</Link>
            <p>/</p>
            <p>{post.title}</p>
          </div>
          <p className={styles.dateFirst}>{post.createdTime}</p>
          <div className={styles.postTitle}>{post.title}</div>
          <div className={styles.postFooter}>
            <p className={styles.dateSecond}>{post.createdTime}</p>
            <div className={styles.postInfo}>
              <div className={styles.infoWrapper}>
                <Icon icon={Icons.eye(styles.icon)} />
                <p>{views}</p>
              </div>
              <button
                className={styles.infoWrapper}
                onClick={() => {
                  const isSetLike = setLike(post.id);
                  if (isSetLike) {
                    setLikes((prev) => prev + 1);
                  }
                }}
              >
                <Icon icon={Icons.like(styles.icon)} />
                <p>{likes}</p>
              </button>
              <div className={styles.infoWrapper}>
                <Icon
                  icon={Icons.message(
                    `${styles.icon} ${isHasComments(post.comments)}`,
                  )}
                />
                <p>{post.comments?.length || 0}</p>
              </div>
              <div className={styles.infoWrapper}>
                <button
                  type='button'
                  className={styles.buttonShare}
                  onClick={copyLink}
                >
                  <Icon icon={Icons.link(styles.icon)} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default PostHeader;
