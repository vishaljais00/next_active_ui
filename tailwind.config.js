/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./node_modules/flowbite/**/*.js",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./Componnets/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [
    require("flowbite/plugin")
  ],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'tab': '744px',
      // => @media (min-width: 767px) { ... }

      'md': '1100px',
      // => @media (min-width: 1200px) { ... }
    },
    
    extend: {
      screens: {
        'xs':{'min':'320px','max':'1023px'},
        'xm':{'min':'500px','max':'1920px'},
        'xs':{'min':'767px','max':'1024px'},
        'ipad':{'min':'1024px','max':'1099px'},
        // 'md':{'min':'1366px','max':'1920px'},
        'lg': {'min':'950px','max':'1920px'},
      },
      fontFamily:{
        Nunito:['Nunito'],
        ABeeZee:['ABeeZee'],
        gestura:['Gestura']
        
       }
    },
  },
};
