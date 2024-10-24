/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    container: {
      center: true,
      padding: '4rem',
    },
    
    extend: {
      dropShadow: {
        'custom': '12px 11px 8px rgba(0, 0, 0, 0.12)',  // Custom drop shadow
      },
      
      colors: {
        'primary': '#F2DEDF',
        'secondary': '#EEE5E5',
        'hover': '#4C75F2',
        'dots': '#100F0F',
        'card-box': 'rgba(255, 255, 255, 1)',
        'dollar': 'rgba(0, 0, 0, 0.3)',
      },
      fontFamily: {
        'frank': ['Frank Ruhl Libre'],
        'lato': ['Lato'],
        'cards': ['rgba(0, 0, 0, 0.12)'],
        'card':['12px 11px 8px 0px rgba(0, 0, 0, 0.12)'],
      },
      screens: {
        'xs': {'min': '320px', 'max': '480px'},  // Screen size for 320px to 480px
        'sm-xs': {'min': '481px', 'max': '639px'},  // Screen size for 481px to 639px
      },
      padding: {
        'xs-1': '10px',  // Add padding-x of 1rem for xs screen size
        'xs-2': '20px',  // Add padding-x of 2rem for
        'xs-3': '25px',  // Add padding-x of 2rem for
        'xs-4': '30px',  // Add padding-x of 2rem for
      }
    },
  },
  plugins: [],
}

