const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          "0%": { height: "0px" },
          "100%": { height: "100px" },
        },
        fontFamily: {
          sans: ["Source Sans Pro", ...defaultTheme.fontFamily.sans],
          serif: ["Source Sans Pro", ...defaultTheme.fontFamily.serif],
        },
      },
    },
    plugins: [],
  },
};
