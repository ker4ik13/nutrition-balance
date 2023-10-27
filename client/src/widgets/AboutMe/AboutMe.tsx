import styles from "./AboutMe.module.scss";
import developerImage from "@/shared/images/developer.svg";
import { facts } from "@/data/facts";
import BlueButton from "@/shared/BlueButton/BlueButton";
import Title from "@/shared/Title/Title";

const AboutMe = () => {
  return (
    <div className={styles.aboutMePage}>
      <div className='container'>
        <Title text={"Обо мне"} className={styles.title} />
        <div className={styles.wrapper}>
          <img src={developerImage} alt='Developer' className={styles.img} />
          <div className={styles.content}>
            <div className={styles.description}>
              <p>О своей работе я думаю, как о форме искусства</p>
              <p>
                Я стремлюсь, чтобы каждый разработанный мной проект был
                уникальным и отразил индивидуальность клиента
              </p>
              <p>
                Мое портфолио включает в себя широкий спектр проектов, от
                небольших веб-страниц до крупных веб-приложений
              </p>
            </div>
            <div className={styles.facts}>
              {facts.map((fact, index) => (
                <div className={styles.fact} key={index}>
                  <p className={styles.factTitle}>{fact.title}</p>
                  <p className={styles.factDescription}>{fact.description}</p>
                </div>
              ))}
            </div>
            <BlueButton link='/' text='Узнать больше фактов' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
