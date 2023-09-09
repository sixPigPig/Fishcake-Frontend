/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily :{
        Int: ["Inter","sans-serif"],
        Sc: ["Sc","sans-serif"],
        Ru: ["Rubik","sans-serif"],
        Lo: ["Lora","sans-serif"],
        Scr: ["Scr","sans-serif"],
      },
      backgroundColor: {
        primary: '#FF285A',
        secondary: '#111111'
      },
      textColor: {
        primary: '#FF285A',
        secondary: '#323F4B',
      },
      colors: {
        'start':'#FF285A',
        'end':'#FDCD01',
      },
      width: {
        'inherit': 'inherit',
      }
    },
  },
  plugins: [
    require('tailwindcss-animated'),
  ],
}
