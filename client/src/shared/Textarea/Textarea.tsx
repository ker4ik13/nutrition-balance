import styles from "./Textarea.module.scss";

interface ITextarea {
  label: string;
  name: string;
  placeholder: string;
}

const Textarea = ({ label, name, placeholder }: ITextarea) => {
  return (
    <div className={styles.textareaWrapper}>
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
      <textarea
        name={name}
        id={name}
        className={styles.textarea}
        placeholder={placeholder}
      ></textarea>
    </div>
  );
};

export default Textarea;
