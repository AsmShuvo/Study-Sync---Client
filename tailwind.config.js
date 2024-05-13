/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        deep: "#292929",
        red: "#1877F2",
        orange: "#F69323",
      },
    },
  },
  plugins: [require("daisyui")],
};
