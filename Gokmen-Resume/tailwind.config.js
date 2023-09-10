/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
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
