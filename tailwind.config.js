/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        container: "1130px",
      },
      colors: {
        primary: "#4CAF4F",
        secondary: "#4D4D4D",
        para: "#717171",
      },
    },
  },
  plugins: [],
};
