import type { ITitle } from "@/interfaces/ITitile";
import styles from "./Title.module.scss";

const Title = ({ text, className }: ITitle) => {
  return <h2 className={`${styles.title} ${className}`}>{text}</h2>;
};

export default Title;
