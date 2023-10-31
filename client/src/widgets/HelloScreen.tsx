import Icon from "@/shared/IconsComponents/Icon";
import { Icons } from "@/shared/IconsComponents/Icons";
import { Link } from "react-router-dom";

const HelloScreen = () => {
  return (
    <div className="flex h-full bg-[#413930] pt-40 min-h-screen">
      <div className="my-container pl-14">
        <h1 className="text-[2.5rem]/[1.3] text-white font-noto font-light cursor-text w-[40rem]">
          Кухни напрямую с фабрики с десятилетней гарантией, в срок от 10 дней
        </h1>
        <div className="flex items-center mt-2">
          <Icon icon={Icons.ruble("max-w-[4rem] -ml-4")} />
          <p className="-mt-2 font-noto text-3xl text-white font-light cursor-text">
            рассрочка до 24 месяцев
          </p>
        </div>
        <div className="flex items-start ml-12 mt-5 mb-8">
          <span className="text-[#D3613D] text-3xl">+</span>
          <p className="text-white text-xl ml-2 mt-1 max-w-[11.25rem] cursor-text">
            3D дизайн проект и расчет за 0 ₽
          </p>
        </div>
        <Link
          to={"#"}
          className="ml-12 text-white font-bold max-w-[17rem] bg-my-gradient py-5 px-10 flex items-center justify-center text-center rounded-full text-sm/4"
        >
          Получить 3D проект и скидку
        </Link>
      </div>
    </div>
  );
};

export default HelloScreen;
