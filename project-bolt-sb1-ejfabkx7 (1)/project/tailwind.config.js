/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        playfair: ['Playfair Display', 'serif'],
      },
      colors: {
        primary: '#f27d9e',
        'primary-light': '#ffd0dd',
        'primary-dark': '#d65a7b',
        secondary: '#7d3c98',
        accent: '#2ecc71',
        'accent-dark': '#27ae60',
      },
    },
  },
  plugins: [],
};