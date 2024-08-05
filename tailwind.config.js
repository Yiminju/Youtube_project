/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: "#ff0000",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
