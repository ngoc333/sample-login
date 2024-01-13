/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary1' : '#0f005f',
        'primary2' : '#4b50f0',
        'primary3' : '#00c8f5',
      },
    },
  },
  plugins: [],
}