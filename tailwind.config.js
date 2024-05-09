/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        deep: "#292929",
        red: "F2184F",
      },
    },
  },
  plugins: [require("daisyui")],
};
