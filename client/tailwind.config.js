/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        gilroy: "Gilroy",
        noto: "Noto Sefis",
        dm: "DM Serif Display",
      },
      dropShadow: {
        main: "0 0 12px #f28c6b",
      },
    },
  },
  plugins: [],
};
