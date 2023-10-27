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

    fontSize: {
      sm: "0.750rem",
      base: "1rem",
      xl: "1.333rem",
      "2xl": "1.777rem",
      "3xl": "2.369rem",
      "4xl": "3.158rem",
      "5xl": "4.210rem",
    },
    fontFamily: {
      heading: "Readex Pro",
      body: "Readex Pro",
    },
    fontWeight: {
      normal: "400",
      bold: "700",
    },
    
  },
  plugins: [],
};
