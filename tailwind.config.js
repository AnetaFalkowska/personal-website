import colors from "tailwindcss/colors";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'slider-sm': '600px',
      },
      colors: {
        secondary: {
          background: "#ffffff", //page background
          section: "#f8f8fa",    // light gray section      
          DEFAULT: "#a5316a",
          dark: "#902d5d", //dark section, navbar mid color
          ['button-text']: "#f9eaf4", // text light pink
          light: "#f4d6e9",//background light pink
          hover: "#73284c" // default button hover
          // dark: "#73284c",
          // ['dark-hover']: "#45122a"
        },
      },
      fontFamily: {
        merriweather: ['"Merriweather"', 'sans-serif']
      },
      backgroundImage: {
        'main-custom-pattern': "url('/images/dots_3.jpg')",
        'technology-custom-pattern': "url('/images/code_2.jpg')",
      },
    },
    
  },
  plugins: [],
}

// "#AA2D5A",