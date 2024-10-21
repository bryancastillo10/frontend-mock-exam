/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#00A6FF",
        secondary: "#888888",
      },
      fontFamily: {
        poppins: ["Poppins", "serif"],
      },
      fontWeight: {
        regular: 400,
        semibold: 600,
        bold: 700,
      },
      fontSize: {
        sm: ["14px", "21px"],
        base: ["16px", "24px"],
      },
    },
  },
  plugins: [],
};
