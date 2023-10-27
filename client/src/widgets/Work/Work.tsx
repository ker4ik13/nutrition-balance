import { IProject } from "@/interfaces/IProject";
import styles from "./Work.module.scss";
import BlueButton from "@/shared/BlueButton/BlueButton";

interface IWork {
  work: IProject;
  index: number;
}

const isRevert = (index: number) =>
  index % 2 === 0 ? styles.work : `${styles.work} ${styles.revert}`;

const Work = ({ work, index }: IWork) => {
  return (
    <>
      <div className={isRevert(index)} key={index}>
        <div className={styles.content}>
          <h3 className={styles.workTitle}>{work.title}</h3>
          <h4 className={styles.workSubtitle}>{work.subtitle}</h4>
          <div className={styles.buttonWrapper}>
            <BlueButton link={`/works/${work.id}`} text='Подробнее' />
          </div>
        </div>
        <div className={styles.photosWrapper}>
          <div className={styles.photos}>
            {work.photos.map((photo, index) => (
              <img
                key={index}
                src={photo}
                alt={`Photo ${index + 1}`}
                className={styles.photo}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Work;
