/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        imfell: ['IM Fell Double Pica'],
        lora: ['Lora']
      }
    },
  },
  plugins: [require("daisyui")],
}
