/** @type {import('tailwindcss').Config} */
module.exports = {
  important : true,
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens :{
        xs: '320px',
        sm:'375px'
      },
      animation:{
        'single-ping':'ping 1s cubic-bezier(0, 0, 0.2, 1)',
        'tilt-shaking':'tilt-shaking .5s infinite linear',
        'move-shaking':'tilt-n-move-shaking 1s infinite linear',
        'jello-vertical': 'jello-vertical 3s both infinite',
        'wobble-right': 'wobble-ver-right 3s both infinite'
      },
      colors: {
        gold:{
          100:'#fef2cd',
          200:'#fcd14f',
          300:'#fcca36',
          400:'#fcc41d',
          500:'#fabb04',
          600:'#e2aa03',
          700:'#c99703',
          800:'#977202'
        },
        black:{
          100:'#434356',
          200:'#373748',
          300:'#2c2c3a',
          400:'#21212b',
          500:'#16161d',
          600:'#111116',
          700:'#0b0b0e',
          800:'#000000'
        },
        gray: {
          100: '#f2f2f2',
          200: '#e5e5e6',
          300: '#d8d8d9',
          400: '#cbcbcd',
          500: '#bfbfc0',
          600: '#b7b7b9',
          700: '#b2b2b3',
          800: '#a5a5a7',
        },
      },
      spacing: {
        '9/16': '56.25%',
        '3/4': '75%',
        '1/1': '100%',
      },
      fontFamily: {
        inter: ['var(--font-inter)', 'sans-serif'],
        rubik: ['var(--font-rubik)', 'sans-serif']
      },
      fontSize: {
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
        '4xl': '2.5rem',
        '5xl': '3.25rem',
        '6xl': '4rem',
      },
      inset: {
        'full': '100%',
      },
      letterSpacing: {
        tighter: '-0.02em',
        tight: '-0.01em',
        normal: '0',
        wide: '0.01em',
        wider: '0.02em',
        widest: '0.4em',
      },
      minWidth: {
        '10': '2.5rem',
      },
      scale: {
        '98': '.98'
      },
      maxWidth: {
        'max-w-8xl': '88rem'
      },
      zIndex:{
        '-z-100':'-100'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
