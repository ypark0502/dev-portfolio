/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{jsx, js}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        Jost: ['Jost', 'sans-serif'],
      }
    },
  },
  plugins: [],
}