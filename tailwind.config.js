/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors:{
        'battle':'#15171E',
        'menucolor':'#23252B'
      },
      
    },
  },
  plugins: [require('daisyui'),],
}

