/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      width: {
        'btn': '15.2745rem',
        '128': '32rem',
      },
      fontFamily: {
        'text': 'Dosis',
        'title': 'Concert One',
      },
    },
  },
  plugins: [],
}
