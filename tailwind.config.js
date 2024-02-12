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
        rotateYAxis: {
          "0%": {
            transform: "rotate(0)",
          },
          "30%": {
            transform: "rotate(0)",
          },
          "31%": {
            transform: "rotate(15deg)",
          },
          "32%": {
            transform: "rotate(0)",
          },
          "33%": {
            transform: "rotate(-15deg)",
          },
          "34%": {
            transform: "rotate(0)",
          },
          "35%": {
            transform: "rotate(15deg)",
          },
          "36%": {
            transform: "rotate(0)",
          },
          "37%": {
            transform: "rotate(-15deg)",
          },
          "38%": {
            transform: "rotate(0)",
          },
          "39%": {
            transform: "rotate(15deg)",
          },
          "40%": {
            transform: "rotate(0)",
          },
          "41%": {
            transform: "rotate(-15deg)",
          },
          "42%": {
            transform: "rotate(0)",
          },
          "100%": {
            transform: "rotate(0)",
          },
        },
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
        fliker: "rotateYAxis 3s cubic-bezier(.97,-0.01,0,1.06) infinite",
      },
    },
  },
  plugins: [],
};
