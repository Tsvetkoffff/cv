/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    screens: {
      md: '768px',
      lg: '1280px',
      xl: '1440px',
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '10px',
        md: '20px',
        lg: '40px',
        xl: '60px',
      },
    },
    colors: {
      transparent: 'rgba(57, 62, 89, 0.2)',
      primary: '#00BFB2',
      primaryDark: '#038E85',
      primaryLigth: 'rgba(0, 191, 178, 0.1)',
      white: '#FFFFFF',
      grey: '#F0F2F2',
      lightGray: '#F0F2F2',
      dark: '#393E59',
      darker: '#010326',
      orange: '#FFEDE1',
      blue: '#EBF4FF',
    },
    fontFamily: {
      sans: ['IBM Plex Mono', 'monospace'],
    },
  },
  plugins: [],
}
