/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'banner': "url(src/img/index_banner.png)",
      }
    },
  },
  plugins: [],
}