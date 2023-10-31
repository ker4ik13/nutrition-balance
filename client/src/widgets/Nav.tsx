import { Link, NavLink } from "react-router-dom";
import Logo from "@/shared/Logo";
import { useRef, useState } from "react";
import Icon from "@/shared/IconsComponents/Icon";
import { ChevronDirection, Icons } from "@/shared/IconsComponents/Icons";
import { Menu } from "@headlessui/react";

interface IActive {
  isActive: boolean;
}

const linkStyles =
  "whitespace-nowrap uppercase text-white font-semibold text-xs decoration-0 transition-all duration-200 tracking-wider hover:opacity-100 opacity-50";

const activeLinkStyles =
  "whitespace-nowrap uppercase text-white font-semibold text-xs decoration-0 transition-all duration-200 tracking-wider drop-shadow-main hover:opacity-100";

const isActiveLink = ({ isActive }: IActive) => {
  return isActive ? activeLinkStyles : linkStyles;
};

const teamLinks = [
  { href: "/team/designers", label: "Дизайнеры" },
  { href: "/team/masters", label: "Мастера" },
  { href: "/team/managers", label: "Менеджеры" },
];

const Nav = () => {
  const wrapper = useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = useState<ChevronDirection>(ChevronDirection.Up);

  const handleRotate = () => {
    if (rotate === ChevronDirection.Up) {
      setRotate(ChevronDirection.Down);
    } else {
      setRotate(ChevronDirection.Up);
    }
  };

  // Отключение скролла при активном бургере
  // const handleNav = () => {
  //   if (wrapper.current) {
  //     wrapper.current.classList.toggle(styles.active);
  //     document.body.classList.toggle("overflow");
  //   }
  //   const navLinks = document.querySelectorAll(`.${styles.link}`);

  //   // Закрытие бургера при клике на любую страницу
  //   navLinks.forEach((link) => {
  //     link.addEventListener("click", () => {
  //       if (wrapper.current) {
  //         wrapper.current.classList.remove(styles.active);
  //         document.body.classList.remove("overflow");
  //       }
  //     });
  //   });
  // };

  return (
    <nav className="w-full pt-5 fixed">
      <div className="my-container">
        <div className="flex items-center justify-between gap-7" ref={wrapper}>
          <Logo />
          <div className="flex items-start justify-center gap-7">
            <NavLink to={"/"} className={isActiveLink}>
              Как мы работаем
            </NavLink>
            <NavLink to={"/kitchens"} className={isActiveLink}>
              Наши кухни
            </NavLink>
            <NavLink to={"/portfolio"} className={isActiveLink}>
              Портфолио
            </NavLink>
            <NavLink to={"/reviews"} className={isActiveLink}>
              Отзывы
            </NavLink>
            <div className="flex flex-col relative">
              <Menu>
                <div className="flex items-center">
                  <Menu.Button
                    className={`${linkStyles} flex gap-2`}
                    onClick={handleRotate}
                  >
                    Наша команда <Icon icon={Icons.chevron(rotate)} />
                  </Menu.Button>
                </div>
                <Menu.Items className="flex flex-col absolute top-5 left-0 bg-zinc-900 rounded-r-xl rounded-b-xl p-6 gap-4 backdrop-blur-lg bg-opacity-[0.35]">
                  {teamLinks.map((link) => (
                    <Menu.Item
                      as="a"
                      key={link.href}
                      href={link.href}
                      className={linkStyles}
                    >
                      {link.label}
                    </Menu.Item>
                  ))}
                </Menu.Items>
              </Menu>
            </div>
          </div>
          <div className="">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="flex justify-center items-center gap-4">
            <Link
              to={"/"}
              className="flex items-center justify-start gap-[.5rem] flex-nowrap decoration-0 transition-all duration-200 opacity-50 hover:opacity-100"
            >
              <Icon icon={Icons.person("w-[1.1rem] text-white")} />
              <p className="whitespace-nowrap font-semibold text-xs/[1] tracking-wider uppercase text-white">
                Кабинет
              </p>
            </Link>
            <a
              href="tel:+74959885528"
              className="flex items-center justify-start gap-[.5rem] flex-nowrap decoration-0 transition-all duration-200"
            >
              <Icon
                icon={Icons.person("w-[1.1rem] text-white filter-shadow")}
              />
              <p className="whitespace-nowrap font-semibold italic text-xs/[1] tracking-wider uppercase text-white">
                +7 (495) 988-55-28
              </p>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
