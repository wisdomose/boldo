/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: "#0A2640",
        "brand-light": "#1C3D5B",
        teal: "#65E4A3",
        "gray-light": "#F1F1F1",
      },
      backgroundImage: {
        hero: "url(/src/assets/Logo Wall.png)",
      },
      boxShadow: {
        custom: "0px 4px 32px rgba(0, 0, 0, 0.08)",
      },
      screens: {
        xs: "480px",
      },
    },
  },
  plugins: [],
};
