/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        mulish: ['Mulish','sans-serif']
      },
      colors: {
        imgborder: '#C084FC',
        gumroad: '#FF90E8',
        sectionbg: '#EAECEF'
      }
    },
  },
  plugins: [],
}

