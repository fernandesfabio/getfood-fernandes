/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        bgnav: '#212121',
        'btn-yellow': '#cbe42f',
        'light-yellow': '#f2ff7e',
        'purple-bg':'#a62c79',
        'orange-bg': '#ee5f36'
      }
    },
  },
  plugins: [],
}

