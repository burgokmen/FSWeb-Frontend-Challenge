/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      spacing: {
        13: "3.25rem",
        15: "3.75rem",
        128: "241px",
        144: "36rem",
      },
      colors: {
        mypurp: {
          1: "#4731d3",
        },
        mygreen: {
          1: "#CBF281",
          2: "#CAF281",
        },
        mydark: {
          1: "#171043",
          2: "#1A210B",
          3: "#252128",
        },
      },
      fontFamily: {
        interbold: ["Inter-Bold", "Helvetica"],
        interreg: ["Inter-Regular", "Helvetica"],
        intermed: ["Inter-Medium", "Helvetica"],
      },
    },
  },
  plugins: [],
};
