/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-color': '#74BE42',
        'secondary-color': '#F0F8FF',
        'primary-color-dark': '#59af39',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'], // Set Poppins as the default sans-serif font
      },
    },
  },
  darkMode: 'class', // Enable dark mode using the 'class' strategy
  plugins: [],
}
