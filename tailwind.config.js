/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,ts,tsx}', './components/**/*.{js,ts,tsx}'], 
  safelist: [
    "bg-nubank",
    "flex-row",
    "flex-wrap",
    "gap-1",
    "text-nubank"
  ],

  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        nubank: "#8209d2",
      },
    },
  },
  plugins: [],
};
