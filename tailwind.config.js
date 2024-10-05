/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    container:{
      center: true,
      padding: '16px',
    },
    fontFamily:{
      WindSong : ['windsong'],
    },
    extend: {
      colors: {
        'primary-blue': '#008DDA',
        'secondary-blue' : '#41C9E2',
        'primary-text':'#001F3F',
      },
    screens:{
      '2xl' : '1320px',
    },
  },
  },  
  plugins: [],
}

