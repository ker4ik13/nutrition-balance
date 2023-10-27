import { Link } from "react-router-dom";
import styles from "./TransparentButton.module.scss";
import { IButton } from "../../interfaces/IButton";

const TransparentButton = ({ link, text, icon }: IButton) => {
  return (
    <Link type='button' to={link} className={styles.transparentButton}>
      {icon && icon}
      {text}
    </Link>
  );
};

export default TransparentButton;
