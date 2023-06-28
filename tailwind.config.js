/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    colors: {
      primary: "#7B0000",
      accent: "#F6D5D5",
      black: "#1B1414",
      white: "#FFFCFC",
      success: "#1A844C",
      "success-light": "#6BA521",
      light: "#d3d3d3",
      gray: "#757575",
      dark: "#333",
    },
    extend: {
      fontSize: {
        "1.5base": ["1.0625", 1.2],
        "1.5lg": ["1.15rem", 1.2],
        "1.5xl": ["1.3rem", 1.2],
        "2.5xl": ["1.66rem", 1.2],
        "3.5xl": ["2rem", 1.2],
        "4.5xl": ["2.5rem", 1.2],
        "5.5xl": ["3.3rem", 1.1],
        "6.5xl": ["4rem", 1.1],
        "8.5xl": ["6.8rem", 1],
      },
      spacing: {
        18: "4.5rem",
      },
      boxShadow: {
        button: "0px -4px 0px 0px rgba(0, 0, 0, 0.20) inset;",
      },
      backgroundImage: {
        "white-linear":
          "linear-gradient(0deg, #FFF 0%, #FFF 100%), url('/bg-light-gray.png')",
      },
    },
  },
  plugins: [],
};
