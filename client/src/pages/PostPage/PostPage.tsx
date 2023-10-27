import { useParams } from "react-router-dom";
import PostHeader from "@/widgets/PostHeader/PostHeader";
import styles from "./PostPage.module.scss";

// TODO: mock posts
import { posts } from "@/data/posts";
import Title from "@/shared/Title/Title";
import Telegram from "@/widgets/Telegram/Telegram";
import Comments from "@/widgets/Comments/Comments";

const PostPage = () => {
  const { id } = useParams();

  if (id) {
    return (
      <div className={styles.postPage}>
        <PostHeader post={posts[+id]} />
        <div className='container'>
          <div className={styles.post}>
            <div className={styles.content}>
              <Title text={posts[+id].description} className={styles.title} />
              <div
                dangerouslySetInnerHTML={{ __html: posts[+id].text }}
                className={styles.text}
              ></div>
              <Telegram
                link='https://t.me/kireev_dev'
                name='Kireev Dev'
                title='Подписывайтесь на Telegram-канал'
              />
              <Comments post={posts[+id]} />
            </div>
            {/* <aside className={styles.sidebar}></aside> */}
          </div>
        </div>
      </div>
    );
  }
};

export default PostPage;
