module.exports = {
  content: ["./index.html"],
  theme: {
    container: {
      center: true,
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      '4xl': { 'raw': '(min-height: 1230px)' },
      'tall': { 'raw': '(min-height: 1230px)' }, 
    },
    gridTemplateColumns: {
      '1fr': '1fr 1fr',
    },
    extend: {},
  },
  plugins: [],
}
