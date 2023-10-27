import Title from "@/shared/Title/Title";
import styles from "./Skills.module.scss";
import { skills } from "@/data/skills";

const fake = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const isActive = (index: number, level: number) =>
  index + 1 < level ? styles.activeDot : styles.dot;

const Skills = () => {
  return (
    <div className={styles.skillsPage}>
      <div className='container'>
        <div className={styles.wrapper}>
          <Title text={"Мои навыки"} />
          <div className={styles.skills}>
            {skills.map((skill, index) => (
              <div className={styles.skill} key={index}>
                <p className={styles.skillTitle}>{skill.title}</p>
                <div className={styles.dots}>
                  {fake.map((_, index) => (
                    <div
                      className={isActive(index, skill.level)}
                      key={index}
                    ></div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
