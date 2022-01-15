module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      MaisonNeue: ['MaisonNeue', 'sans-serif'],
    },
    extend: {
      boxShadow: {
        custom: '0 4px 13px rgb(0 0 0 / 5%)',
      },
      colors: {
        header: '#dde2e9',
        primary: '#2a3d5c',
        secondary: '#788599',
        'light-gray': '#f5f5f5',
        'darker-gray': '#e6e6e6',
      },
    },
  },
  plugins: [],
}
