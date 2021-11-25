module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        comforter: 'Comforter',
        praise: 'Praise',
        'm-plus': "'M+PLUS+1'",
      },
      fontSize: {
        '10xl': '10rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
