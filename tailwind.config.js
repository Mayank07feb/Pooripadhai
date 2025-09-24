/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./views/**/*.ejs",
    "./views/**/*.html",
    "./partials/**/*.ejs",
    "./*.ejs",
    "./public/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#30add1',    // main primary color
          hover: '#268ca9',      // darker shade for hover states
        },
        secondary: {
          DEFAULT: '#000000',    // main secondary color (black)
          hover: '#333333',      // optional lighter/darker shade for hover
        },
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        'open-sans': ['Open Sans', 'sans-serif'],
      },
      fontSize: {
        base: "15px",   // Paragraph
        h1: "48px",     // Heading 1
        h2: "36px",
        h3: "28px",
        h4: "22px",
        h5: "18px",
        h6: "16px",
      },
    },
  },
  plugins: [],
}
