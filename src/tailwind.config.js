/ @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.js",
    "./components//*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gray-900': '#121212',
        'gray-800': '#1e1e1e',
        'gray-700': '#333333',
        'white': '#fafafa',
        'red-500': '#ec4d58',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}