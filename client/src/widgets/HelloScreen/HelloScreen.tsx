import styles from "./HelloScreen.module.scss";
import human from "@/shared/images/person1.png";
import BlueButton from "@/shared/BlueButton/BlueButton";
import TransparentButton from "@/shared/TransparentButton/TransparentButton";
import Icon from "@/shared/IconsComponents/Icon";
import { Icons } from "@/shared/IconsComponents/Icons";
import { Link } from "react-router-dom";

const HelloScreen = () => {
  return (
    <header className={styles.helloScreen}>
      <div className='container'>
        <div className={styles.wrapper}>
          <div className={styles.contacts}>
            <Link to={"/"} className={styles.link}>
              <Icon icon={Icons.telegram(styles.svg)} />
            </Link>
            <Link to={"/"} className={styles.link}>
              <Icon icon={Icons.vk(styles.svg)} />
            </Link>
            <Link to={"/"} className={styles.link}>
              <Icon icon={Icons.insta(styles.svg)} />
            </Link>
            <Link to={"/"} className={styles.link}>
              <Icon icon={Icons.github(styles.svg)} />
            </Link>
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>
              Я <span>Frontend</span> разработчик
            </h1>
            <h2 className={styles.description}>
              <p>Меня зовут Кирилл</p>
              <p>
                За моими плечами 7 лет опыта разработки веб-сайтов и приложений
              </p>
              <p>
                Секрет успешного опыта в том, что каждому проекту я не только
                уделяю время, но и вкладываю в каждый из них свою душу
              </p>
              <p>
                Я зарабатываю огромные деньги, а клиенты ценят меня за мою
                гибкость, лояльность, и профессиональный подход
              </p>
            </h2>
            <div className={styles.buttons}>
              <BlueButton
                link='/'
                text='Cвязаться со мной'
                icon={<Icon icon={Icons.message(styles.icon)} />}
              />
              <TransparentButton
                link='https://docs.google.com/document/d/1NJ64bhSA-xORt7fE4vEdBtWwdpnD9JjyrEpTF-JAACA/edit?usp=sharing'
                text='Скачать резюме'
                icon={<Icon icon={Icons.docs(styles.icon)} />}
              />
            </div>
          </div>
          <div className={styles.wrapperImg}>
            <img
              src={human}
              alt="It's me!"
              className={styles.human}
              draggable={false}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default HelloScreen;
