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
          DEFAULT: "#AA2D5A",
          hover: "#8C284A",
          text: "#aa2d5a",
          ['button-text']: "#FCF3F7",
          dark: "#762541",
          ['dark-hover']: "#471023"
        },
      },
      fontFamily: {
        merriweather: ['"Merriweather"', 'sans-serif']
      }
    },
  },
  plugins: [],
}

