/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    './index.html'
  ],
  theme: {
    fontFamily:{
      sans:['Inter', 'sans-serif']
    },
    extend: {
      
      backgroundImage:{
        galaxy: "url('/background-galaxy.png')",
        'gradient': 'linear-gradient(89.86deg, #9572FC 13.88%, #43E7AD 73.94%, #E1D55D 94.57%);',
        'game-gradient': 'linear-gradient(188deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 67.88%);'
      }
    },
  },
  plugins: [],
}
