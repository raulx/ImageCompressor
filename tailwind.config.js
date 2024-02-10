/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        neutral: "#F3F4FF",
        light: "#7583FD",
        medium: "#071DE2",
        dark: "#192382",
      },
    },
  },
  plugins: [],
};
