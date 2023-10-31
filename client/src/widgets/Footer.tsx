import Logo from "@/shared/Logo";
import styles from "./Footer.module.scss";
import { Link, NavLink } from "react-router-dom";
import { ChevronDirection, Icons } from "@/shared/IconsComponents/Icons";
import Icon from "@/shared/IconsComponents/Icon";
import { Menu } from "@headlessui/react";
import { useState } from "react";

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

const Footer = () => {
  const [rotate, setRotate] = useState<ChevronDirection>(ChevronDirection.Up);

  const handleRotate = () => {
    if (rotate === ChevronDirection.Up) {
      setRotate(ChevronDirection.Down);
    } else {
      setRotate(ChevronDirection.Up);
    }
  };
  return (
    <div className="pt-7 bg-[#232120]">
      <div className="my-container flex flex-col items-center justify-center">
        <div className="flex justify-between lg:items-start items-center w-full flex-col lg:flex-row lg:gap-0 gap-5">
          <Logo />
          <div className="flex gap-7 ml-30 mt-6 lg:flex-row flex-col">
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
            <Menu>
              <div className="relative">
                <div className="flex items-center">
                  <Menu.Button
                    className={`${linkStyles} flex gap-2`}
                    onClick={handleRotate}
                  >
                    Наша команда <Icon icon={Icons.chevron(rotate)} />
                  </Menu.Button>
                </div>
                <Menu.Items className="flex flex-col absolute bottom-5 left-0 bg-zinc-900 rounded-r-xl rounded-br-xl p-6 gap-4 backdrop-blur-lg bg-opacity-[0.35]">
                  {teamLinks
                    .slice()
                    .reverse()
                    .map((link) => (
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
              </div>
            </Menu>
          </div>
          <div className="flex flex-col gap-4">
            <a
              href="mailto:info@youkuhnya.ru"
              className="flex items-center justify-start gap-[.5rem] flex-nowrap decoration-0 transition-all duration-200"
            >
              <Icon
                icon={Icons.mail("w-[4rem] text-white filter-shadow -ml-6")}
              />
              <p className="whitespace-nowrap font-semibold italic text-xs/[1] tracking-wider uppercase text-white -ml-5">
                info@youkuhnya.ru
              </p>
            </a>
            <a
              href="tel:+74959885528"
              className="flex items-center justify-start gap-[.5rem] flex-nowrap decoration-0 transition-all duration-200 -mt-10"
            >
              <Icon
                icon={Icons.phone("w-[4rem] text-white filter-shadow -ml-6")}
              />
              <p className="whitespace-nowrap font-semibold italic text-xs/[1] tracking-wider uppercase text-white -ml-5">
                +7 (495) 988-55-28
              </p>
            </a>
          </div>
        </div>
      </div>
      <div className="bg-[#1D1B1B]">
        <div className="my-container flex w-full py-3 justify-between items-center gap-6 lg:flex-row flex-col">
          <p className="text-[#A89E94] text-[0.75rem]/[1.5]">
            © 2023 Мебельная фабрика «Твоя Кухня». Все права защищены.
          </p>
          <div className="flex gap-5 items-center justify-center">
            <Icon icon={Icons.telegram("w-[1.3rem]")} />
            <Icon icon={Icons.whatsapp("w-[1.3rem]")} />
            <Icon icon={Icons.vk("w-[1.3rem]")} />
          </div>
          <p className="text-[#A89E94] text-[0.75rem]/[1.5]">
            г. Москва, ул. Новоостаповская д. 6Б. Мы работаем 10:00 - 20:00 /
            Без выходных
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
