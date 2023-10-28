/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      text: "#ffffff",
      background: "#070708",
      primary: "#4a4c42",
      secondary: "#222126",
      accent: "#fbf818",
    },
    fontFamily: {
      heading: "Readex Pro",
      body: "Readex Pro",
    },
  },
  plugins: [],
};
