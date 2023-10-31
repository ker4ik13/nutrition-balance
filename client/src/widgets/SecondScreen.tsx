import woman1 from "@/data/images/woman1.png";
import kitchen1 from "@/data/images/kitchen1.png";
import kitchen2 from "@/data/images/kitchen2.png";

const SecondScreen = () => {
  return (
    <div className="bg-[#413930]">
      <div className="my-container relative flex justify-between">
        <div className="ellipse1 z-0"></div>
        <p className="absolute font-dm opacity-20 text-gradient-my font-normal text-9xl top-[7rem] left-[15%]">
          01
        </p>
        <p className="absolute font-dm opacity-20 text-gradient-my font-normal text-9xl top-[14rem] right-[20%]">
          02
        </p>
        <div className="relative flex pt-28 flex-nowrap z-10 max-w-[14.5rem]">
          <p className="max-w-[12rem] text-4xl/[1.3] absolute top-16 left-0 text-white font-noto font-light cursor-text whitespace-nowrap">
            Скорее всего вы:
          </p>
          <div className="flex flex-col relative w-full mt-16 gap-3 items-center pt-3 px-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 228 280"
              className="absolute left-0 top-0 w-full"
            >
              <path
                d="M228 30C228 24.4772 223.514 20.0329 218.008 19.5977C182.246 16.7706 150.79 6.7499e-06 114 9.9662e-06C77.1366 1.31889e-05 45.9053 16.7849 9.9926 19.6013C4.48667 20.0331 2.13986e-06 24.4772 2.62268e-06 30L2.18678e-05 250.138C2.22852e-05 254.913 2.81745 259.211 7.29789 260.86C23.4776 266.816 64.8437 280 114 280C163.156 280 204.522 266.816 220.702 260.86C225.183 259.211 228 254.913 228 250.138L228 30Z"
                fill="white"
              />
            </svg>
            <p className="font-dm text-5xl relative z-10 text-gradient-my2">
              ?
            </p>
            <img
              src={kitchen1}
              alt="Kitchen 1"
              className="relative z-10 mt-1"
            />
            <p className="text-black text-sm/[1.5] relative z-10 mt-3 text-center cursor-text">
              Понимаете, какую хотите кухню,{" "}
              <span className="font-bold">но без деталей</span>
            </p>
          </div>
        </div>
        <img
          src={woman1}
          alt="Woman"
          className="relative z-10 object-contain aspect-auto w-full max-w-md"
        />
        <div className="relative flex pt-56 flex-nowrap z-10 max-w-[14.5rem]">
          <p className="max-w-[12rem] text-4xl/[1.3] absolute top-[8rem] left-[50%] translate-x-[-50%] text-white font-noto font-light cursor-text mt-16 whitespace-nowrap">
            Либо:
          </p>
          <div className="flex flex-col relative w-full mt-16 gap-3 items-center pt-3 px-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 228 280"
              className="absolute left-0 top-0 w-full"
            >
              <path
                d="M228 30C228 24.4772 223.514 20.0329 218.008 19.5977C182.246 16.7706 150.79 6.7499e-06 114 9.9662e-06C77.1366 1.31889e-05 45.9053 16.7849 9.9926 19.6013C4.48667 20.0331 2.13986e-06 24.4772 2.62268e-06 30L2.18678e-05 250.138C2.22852e-05 254.913 2.81745 259.211 7.29789 260.86C23.4776 266.816 64.8437 280 114 280C163.156 280 204.522 266.816 220.702 260.86C225.183 259.211 228 254.913 228 250.138L228 30Z"
                fill="white"
              />
            </svg>
            <p className="font-dm text-5xl relative z-10 text-gradient-my2">
              ?
            </p>
            <img src={kitchen2} alt="Kitchen 1" className="relative z-10" />
            <p className="text-black text-sm/[1.5] relative z-10 text-center cursor-text">
              Ничего не подходит,{" "}
              <span className="font-bold">не знаете, какую кухню хотите</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondScreen;
