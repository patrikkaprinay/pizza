module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        xs: '450px',
      },
      fontFamily: {
        comforter: 'Comforter',
        praise: 'Praise',
        'm-plus': "'M PLUS 1'",
        josefin: 'Josefin Sans',
        italianno: 'Italianno',
        'roboto-s': "'Roboto Slab'",
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
