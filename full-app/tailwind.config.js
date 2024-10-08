/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // This ensures Tailwind scans your files for classes
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          '105': "#1869dc", 
          '205': '#074099',
          'purple': '#545da8'
          
        },
        yellow:{
          '105': '#eff3f6'
        },
        black:{
          '105':'</div>'
        },
        red:{
          'limited':'#e02447'
        }
      },
      backgroundClip: {
        text: 'text',
      },
      fontFamily: {
        navfont: ['"IBM Plex Sans", sans-serif'],
        roboto: ['"Roboto"', 'sans-serif'],
        ubuntu: ['"Ubuntu Sans", sans-serif'],
        monserrat: [ '"Montserrat", sans-serif']
      },
      width: {
        "202":'200px',
        '166': '700px', 
        '106': '250px',
        "1608": '1608px',
        '404': '800px',
        '444': '450px',
        '230': '350px',
        '240':'350px',
        '210': '330px',
         '555': '300px'
      },
      fontSize: {
        'title': '15px',
      },
      spacing: {
        '105': '300px', 
      },
      height:{
        '40': '70px',
        '20': '150px',
        '200':'180px',
        '720': '720px',
        '168': '168px',
        'carousel': '500px',
        'score': '300px'
        
      },
      fontWeight: {
        'extra-light': 200,
        'semi-bold': 600,  
        'extra-bold': 1000, 
      },
      maxWidth: {
        '808': '350px',  
    },
  },
  variants: {
    extend: {
      backgroundClip: ['hover', 'focus'],
    },
  },
  plugins: [],
}}