import styles from "./MyWorks.module.scss";
import { works } from "@/data/works";
import { Link } from "react-router-dom";
import Title from "@/shared/Title/Title";
import Work from "../Work/Work";

const MyWorks = () => {
  return (
    <div className={styles.worksPage}>
      <div className='container'>
        <div className={styles.wrapper}>
          <Title text={"Мои работы"} />
          <div className={styles.works}>
            {works.map((work, index) => (
              <Work work={work} index={index} key={index} />
            ))}
          </div>
          <Link to={"/works"} className={styles.link}>
            Смотреть все работы
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MyWorks;
