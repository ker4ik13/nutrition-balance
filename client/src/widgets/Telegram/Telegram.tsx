import { Link } from "react-router-dom";
import styles from "./Telegram.module.scss";
import Icon from "@/shared/IconsComponents/Icon";
import { Icons } from "@/shared/IconsComponents/Icons";

interface ITelegram {
  link: string;
  title: string;
  name: string;
}

const Telegram = ({ link, title, name }: ITelegram) => {
  return (
    <Link to={link} className={styles.telegramWidget}>
      <h3 className={styles.linkTitle}>{title}</h3>
      <div className={styles.linkWrapper}>
        <Icon icon={Icons.telegram(styles.icon)} />
        <h3 className={styles.name}>{name}</h3>
      </div>
    </Link>
  );
};

export default Telegram;
