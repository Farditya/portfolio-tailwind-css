/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      backgroundImage: theme => ({
        'instagram-gradient': 'linear-gradient(25deg, #833ab4, #fd1d1d, #fcb045)',
      }),
      colors: {
        primary : '#14b8a6',
        secondary : '#64748b',
        dark : '#134e4a',
      },
      screens:{
        '2xl' : '1320px',
      },
    },
  },
  plugins: [],
}

