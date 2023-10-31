import { Link } from "react-router-dom";
import logoImg from "@/data/images/logo.png";

const Logo = () => {
  return (
    <Link to={"/"} className="flex justify-center items-center decoration-0">
      <img
        src={logoImg}
        alt="Your Kitchen"
        draggable={false}
        className="w-full"
      />
      <div className="flex flex-col justify-start items-center h-full">
        <p className="font-semibold text-sm/4 text-white uppercase tracking-wider whitespace-nowrap">
          Твоя кухня
        </p>
        <p className="text-[0.5rem] opacity-60 tracking-wider text-white uppercase whitespace-nowrap">
          Мебельная фабрика
        </p>
      </div>
    </Link>
  );
};

export default Logo;
