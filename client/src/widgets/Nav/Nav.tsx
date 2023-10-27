import { NavLink } from "react-router-dom";
import styles from "./Nav.module.scss";
import Logo from "@/shared/Logo/Logo";
import { useRef } from "react";

interface IActive {
  isActive: boolean;
}
const isActiveLink = ({ isActive }: IActive) => {
  return isActive ? `${styles.link} ${styles.active}` : styles.link;
};

const Nav = () => {
  const wrapper = useRef<HTMLDivElement>(null);

  const handleNav = () => {
    if (wrapper.current) {
      wrapper.current.classList.toggle(styles.active);
      document.body.classList.toggle("overflow");
    }
    const navLinks = document.querySelectorAll(`.${styles.link}`);

    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        if (wrapper.current) {
          wrapper.current.classList.remove(styles.active);
          document.body.classList.remove("overflow");
        }
      });
    });
  };

  return (
    <nav className={styles.nav}>
      <div className='container'>
        <div className={styles.wrapper} ref={wrapper}>
          <Logo />
          <div className={styles.pages}>
            <NavLink to={"/"} className={isActiveLink}>
              Главная
            </NavLink>
            <NavLink to={"/about"} className={isActiveLink}>
              Обо мне
            </NavLink>
            <NavLink to={"/works"} className={isActiveLink}>
              Портфолио
            </NavLink>
            <NavLink to={"/contacts"} className={isActiveLink}>
              Контакты
            </NavLink>
            <NavLink to={"/blog"} className={isActiveLink}>
              Блог
            </NavLink>
          </div>
          <div className={styles.burger} onClick={handleNav}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
