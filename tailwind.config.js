/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        archivo: ['Archivo'],
        imfell: ['IM Fell Double Pica'],
        lora: ['Lora'],
        nunito: ['Nunito Sans'],
        sacramento: ['Sacramento']
      }
    },
  },
  plugins: [require("daisyui")],
}
