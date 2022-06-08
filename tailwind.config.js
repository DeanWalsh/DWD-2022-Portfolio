module.exports = {
  content: ["./index.html"],
  theme: {
    container: {
      center: true,
    },
    screens: {
      '4xl': { 'raw': '(min-height: 1230px)' },
      'tall': { 'raw': '(min-height: 1230px)' } 
    },
    gridTemplateColumns: {
      '1fr': '1fr 1fr',
    },
    extend: {},
  },
  plugins: [],
}
