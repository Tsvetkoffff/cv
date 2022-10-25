/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
    },
    screens: {
      '2xl': '1320px',
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '5%',
      },
    },
    colors: {
      transparent: 'rgba(57, 62, 89, 0.2)',
      primary: '#00BFB2',
      primaryDark: '#038E85',
      primaryLigth: 'rgba(0, 191, 178, 0.1)',
      grey: '#F0F2F2',
      dark: '#393E59',
      black: '#010326',
      lightGray: '#F0F2F2',
      white: '#FFFFFF',
      orange: '#FFEDE1',
      blue: '#EBF4FF',
    },
    fontFamily: {
      sans: ['IBM Plex Mono', 'monospace'],
    },
  },
  plugins: [],
}