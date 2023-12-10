/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      white: "#E8E9EB",
      gray: "#E0DFD5",
      black: "#313638",
      brown: "#F09D51",
      tomato: "#F06543"
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "2rem",
        sm: "3rem",
        lg: "4rem",
      }
    },
    extend: {},
  },
  plugins: [],
};
