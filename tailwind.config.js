/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  daisyui: {
    themes: [
      {
        mytheme: {
          
"primary": "#f472b6",
          
"secondary": "#14b8a6",
          
"accent": "#2563eb",
          
"neutral": "#ff00ff",
          
"base-100": "#ffe7b4",
          
"info": "#06b6d4",
          
"success": "#00ff00",
          
"warning": "#fef08a",
          
"error": "#fb7185",
"yeelo":"#FFA825"
          },
        },
      "dark", "retro",],
    },
    
  
  theme: {
    extend: {
      colors:{
        'battle':'#15171E',
        'menucolor':'#23252B'
      },
      width:{

        'nav800':'700px',
        '1000':'1500px'
      },
      fontSize:{

        'size1':'12rem'
      },
      

    },
  },
  plugins: [require('daisyui'),],
}

