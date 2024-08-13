/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}"],
  
  theme: {
    extend: {
      fontFamily: {
        Poppin: [ 'Poppins', 'Hanuman'],
        hanuman: ["Kantumruy Pro", 'sans-serif'],
      },
    },
  },
  plugins: [],
}