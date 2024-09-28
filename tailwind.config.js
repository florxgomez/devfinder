/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      primary: "#0079FF",
      "secondary-light": "#697C9A",
      "blue-light": "#4B6A9B",
      "black-light": "#2B3442",
      "secondary-background-light": "#F6F8FF",
      "background-light": "#FEFEFE",
      "secondary-dark": "#FFFFFF",
      "secondary-background-dark": "#141D2F",
      "background-dark": "#1E2A47",
    },
    fontFamily: { sans: ["Space Mono"] },
  },
  plugins: [],
};
