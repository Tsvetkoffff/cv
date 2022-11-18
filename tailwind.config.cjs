/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    screens: {
      sm: '500px',
      md: '768px',
      lg: '1024px',
      xl: '1440px',
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '10px',
        sm: '10px',
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
      grey: '#393E59',
      lightGray: '#F0F2F2',
      dark: '#010326',
      darker: '#010326',
      orange: '#FFEDE1',
      blue: '#EBF4FF',
    },
    fontFamily: {
      sans: ['IBM Plex Mono', 'monospace'],
    },
    letterSpacing: {
      tightest: '-.083em',
      tighter: '-.05em',
      tight: '-.025em',
      normal: '0',
      wide: '.025em',
      wider: '.05em',
      widest: '.1em',
      widest: '.25em',
    },
    fontSize: {
      sm: [
        '0.875rem',
        {
          lineHeight: '130%',
          letterSpacing: '-.083em',
        },
      ],
      base: [
        '1rem',
        {
          lineHeight: '130%',
          letterSpacing: '-.083em',
        },
      ],
      lg: [
        '1.5rem',
        {
          lineHeight: '130%',
          letterSpacing: '-.083em',
        },
      ],
      xl: [
        '2rem',
        {
          lineHeight: '130%',
          letterSpacing: '-.083em',
        },
      ],
      '2xl': [
        '2.8rem',
        {
          lineHeight: '130%',
          letterSpacing: '-.083em',
        },
      ],
    },
  },
  plugins: [],
}
