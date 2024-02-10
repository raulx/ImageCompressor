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
        extraDark: "#413D51",
      },
      keyframes: {
        blink: {
          "0%": {
            transform: "-translateY(100%)",
          },
          "5%": {
            transform: "-translateY(100%)",
          },
          "5.1%": {
            transform: "translateY(0)",
          },
          "5.2%": {
            transform: "-translateY(100%)",
          },
          "100%": {
            transform: "-translateY(100%)",
          },
        },
      },
      animation: {
        owlBlink: "blink 3s cubic-bezier(0,.97,0,.97) infinite",
      },
    },
  },
  plugins: [],
};
