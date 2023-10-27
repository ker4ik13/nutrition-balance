import { RegisterOptions, UseFormRegisterReturn } from "react-hook-form";
import styles from "./Input.module.scss";

interface InputProps {
  type: string;
  name: string;
  label: string;
  placeholder: string;
  register: (name: string, options?: RegisterOptions) => UseFormRegisterReturn;
  required: boolean;
}

const Input = ({
  type,
  name,
  label,
  placeholder,
  register,
  required,
}: InputProps) => {
  return (
    <div className={styles.inputWrapper}>
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className={styles.input}
        id={name}
        {...register(name, { required })}
      />
    </div>
  );
};

export default Input;
