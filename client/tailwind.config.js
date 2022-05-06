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
        'blue': '#077bf7',
        'yellow': '#fcba03',
        'lightBlue': '#3b96f7',
        'gray1': '#ded9d9',
        'gray2': '#949292',
      },
    },
    plugins: [],
  },
}
