/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts}"],
  theme: {
    extend: {
      backgroundImage: (theme) => ({}),
      colors: {},
    },
    fontFamily: {
      Exo: ["Exo, sans-serif"],
    },
    container: {
      center: true,
      padding: "2rem",
    },
    screens: {
      sm: "640px",
      tablet: "776px",
      md: "1032px",
      lg: "1400px",
    },
  },
  plugins: [],
};
