/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xss: "360px",
        xs: "420px",
        s: "550px",
        sm: "640px", // Small screens
        md: "880px", // Medium screens (customize this)
        big: "1000px",
        lg: "1240px", // Large screens (customize this)
        xl: "1380px", // Extra-large screens
      },
      fontFamily: {
        cinzel: ["Cinzel", "serif"],
        kalnia: ["Kalnia", "serif"],
      },
    },
  },
  plugins: [],
};
