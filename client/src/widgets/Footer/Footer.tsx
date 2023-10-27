import Logo from "@/shared/Logo/Logo";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className='container'>
        <div className={styles.wrapper}>
          <div className={styles.nav}>
            <Logo />
          </div>
          <div className={styles.developers}>
            <p className={styles.developer}>
              Дизайн:{" "}
              <a href='https://t.me/alexpyriev' target='_blank'>
                Александр Пырьев
              </a>
            </p>

            <p className={styles.developer}>
              Разработка:{" "}
              <a href='https://t.me/ker4ik13' target='_blank'>
                Киреев Кирилл
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
