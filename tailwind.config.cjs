/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'pink':'#f6e6de'
      }
    },
    fontFamily:{
      schwifty:['Schwifty','cursive'],
      cheri:['Cheri','cursive'],
      cherilight:['Cherilight','cursive'],
    }
  },
  plugins: [],
}
