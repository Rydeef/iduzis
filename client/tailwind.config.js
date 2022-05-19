module.exports = {
  content: ['./src/**/*.{jsx,js,ts,tsx}'],
  theme: {
    screens: {
      'xs': '0px',
      'sm': '577px',
      'md': '769px',
      'gl': '1024px',
      'xl': '1201px',
    },
    extend: {
      colors: {
        'blue': 'rgb(25, 118, 210)',
        'yellow': '#fcba03',
        'lightBlue': 'rgb(204, 226, 255)',
        'gray1': '#ded9d9',
        'gray2': '#949292',
        'lightGray': 'rgba(25, 118, 210, 0.04)'

      },
    },
    plugins: [],
  },
}
