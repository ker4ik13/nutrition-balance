import HelloScreen from "@/widgets/HelloScreen/HelloScreen";
import styles from "./WorksPage.module.scss";
import Title from "@/shared/Title/Title";
import { works } from "@/data/works";
import Work from "@/widgets/Work/Work";
import { useState } from "react";

const WorksPage = () => {
  const [pagination, setPagination] = useState(1);
  const isActive = (index: number) =>
    index - 1 === pagination ? styles.active : "";

  return (
    <div className={styles.worksPage}>
      <HelloScreen />
      <div className='container'>
        <Title text={"Мои работы"} className={styles.title} />
        <div className={styles.works}>
          {works.map((work, index) => (
            <Work work={work} index={index} key={index} />
          ))}
          <div className={styles.buttons}>
            {works.map((_, index) => {
              if (index % 4 === 0) {
                // TODO: доделать пагинацию
                return (
                  <button
                    type='button'
                    className={`${styles.button} ${isActive(index)}`}
                    key={index}
                    onClick={() => setPagination(index + 1)}
                  >
                    {index + 1}
                  </button>
                );
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorksPage;
