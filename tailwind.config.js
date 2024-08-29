import colors from "tailwindcss/colors";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        secondary: {
          background: "#ffffff", 
          ['background-light']: "#fcf3f7",          
          DEFAULT: "#a5316a",
          hover: "#902d5d",
          text: "#a5316a",
          ['button-text']: "#f9eaf4",
          dark: "#73284c",
          ['dark-hover']: "#45122a"
        },
      },
      fontFamily: {
        merriweather: ['"Merriweather"', 'sans-serif']
      }
    },
  },
  plugins: [],
}

// "#AA2D5A",