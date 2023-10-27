import requests from "@/features/requests";
import styles from "./DiscussFrom.module.scss";
import BlueButton from "@/shared/BlueButton/BlueButton";
import Title from "@/shared/Title/Title";
import { useForm, SubmitHandler } from "react-hook-form";
import { OrderStates } from "@/interfaces/options/OrderStates";

const API_URL: string = import.meta.env.VITE_API_URL;

if (!API_URL) {
  console.error("API URL is not defined");
}

interface Inputs {
  firstName: string;
  lastName: string;
  email: string;
  phone: number;
  telegram: string;
  message: string;
  state: OrderStates;
  confidential: boolean;
}

const DiscussForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    data.state = OrderStates.New;
    const result = await requests.post(`${API_URL}/api/orders`, data);
    const order = await result?.json();
    console.log(order);
  };

  return (
    <div className={styles.formPage}>
      <div className="container">
        <div className={styles.wrapper}>
          <Title text={"Обсудим ваш проект?"} className={styles.formTitle} />
          <p className={styles.description}>
            Чтобы связаться со мной заполните форму ниже. Обычно я отвечаю в
            течение нескольких часов. Иногда это занимает до двух суток.
          </p>
          <form
            action="#"
            method="post"
            className={styles.form}
            onSubmit={handleSubmit(onSubmit)}
          >
            {/* Имя и фамилия */}
            <div className={styles.string}>
              {/* Имя */}
              <div className={styles.inputWrapper}>
                {/* <Input
                  label="Имя*"
                  name="firstName"
                  placeholder="Имя*"
                  register={}
                  required
                  type="text"
                /> */}
                <label htmlFor="firstName" className={styles.label}>
                  Имя*
                </label>
                <input
                  type="text"
                  placeholder="Имя*"
                  className={styles.input}
                  id="firstName"
                  {...register("firstName", {
                    required: "Введите ваше имя",
                    minLength: 2,
                  })}
                />
                {errors.firstName && (
                  <p className={styles.error}>
                    {`${errors.firstName.message}` ||
                      "Минимальная длина 2 символа"}
                  </p>
                )}
              </div>
              {/* Фамилия */}
              <div className={styles.inputWrapper}>
                <label htmlFor="lastName" className={styles.label}>
                  Фамилия
                </label>
                <input
                  type="text"
                  placeholder="Фамилия"
                  className={styles.input}
                  id="lastName"
                  {...register("lastName")}
                />
              </div>
            </div>
            <div className={styles.string}>
              {/* E-mail */}
              <div className={styles.inputWrapper}>
                <label htmlFor="email" className={styles.label}>
                  E-mail*
                </label>
                <input
                  type="email"
                  placeholder="ivanov@company.ru*"
                  className={styles.input}
                  id="email"
                  {...register("email", {
                    required: "Введите ваш e-mail",
                    pattern: {
                      value:
                        /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu,
                      message: "Введен некорректный e-mail",
                    },
                  })}
                />
                {errors.email && (
                  <p className={styles.error}>{`${errors.email.message}`}</p>
                )}
              </div>
            </div>
            <div className={styles.string}>
              {/* Телефон */}
              <div className={styles.inputWrapper}>
                <label htmlFor="phone" className={styles.label}>
                  Телефон
                </label>
                <input
                  type="tel"
                  placeholder="+7 (999) 999-99-99"
                  className={styles.input}
                  id="phone"
                  {...register("phone", {
                    pattern: {
                      value:
                        /^(8|\+7|7)[\s\-]?\(?[349][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/,
                      message: "Некорректный номер телефона",
                    },
                  })}
                />
                {errors.phone && (
                  <p className={styles.error}>{`${errors.phone.message}`}</p>
                )}
              </div>
              {/* Telegram */}
              <div className={styles.inputWrapper}>
                <label htmlFor="telegram" className={styles.label}>
                  Telegram
                </label>
                <input
                  type="text"
                  placeholder="@ivanov"
                  className={styles.input}
                  id="telegram"
                  {...register("telegram")}
                />
              </div>
            </div>
            <div className={styles.string}>
              {/* Message */}
              <div className={styles.inputWrapper}>
                <label htmlFor="message" className={styles.label}>
                  Сообщение*
                </label>
                <textarea
                  id="message"
                  className={styles.textarea}
                  placeholder="Введите текст сообщения*"
                  {...register("message", {
                    required: "Введите текст сообщения",
                  })}
                ></textarea>
                {errors.message && (
                  <p className={styles.error}>
                    Это поле обязательно к заполнению
                  </p>
                )}
              </div>
            </div>
            {/* Confidential */}
            <div className={styles.inputWrapper}>
              <div className={styles.checkboxWrapper}>
                <input
                  type="checkbox"
                  id="confidential"
                  className={styles.checkbox}
                  {...register("confidential", {
                    required: "Обязательно к соглашению",
                  })}
                />
                <label htmlFor="confidential" className={styles.checkboxLabel}>
                  Заполняя форму я соглашаюсь с{" "}
                  <a href="#" className={styles.labelLink}>
                    политикой конфиденциальности
                  </a>
                </label>
              </div>
              {errors.confidential && (
                <p className={styles.error}>
                  {`${errors.confidential.message}`}
                </p>
              )}
            </div>
            <div className={styles.buttonWrapper}>
              <BlueButton link="#" text="Отправить сообщение" type="submit" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DiscussForm;
