import { Link } from "react-router-dom";
import styles from "./BlueButton.module.scss";
import { IButton } from "../../interfaces/IButton";

const BlueButton = ({ link, text, icon, onClick, type }: IButton) => {
  if(type){
    return (
      <button
        type={type}
        className={styles.blueButton}
        onClick={onClick}
      >
        {icon && icon}
        {text}
      </button>
    )
  }
  return (
    <Link
      type='button'
      to={link}
      className={styles.blueButton}
      onClick={onClick}
    >
      {icon && icon}
      {text}
    </Link>
  );
};

export default BlueButton;
