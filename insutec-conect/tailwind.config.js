/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{jsx,js,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        mulish: ['Mulish', 'sans-serif'],
      },
      colors: {
        customPurple: {
          100: '#e0c1f4',
          200: '#c8a2e6',
          300: '#b083d8',
          400: '#9854ca',
          500: '#803bbc',
          600: '#6d32a6',
          700: '#5a2990',
          800: '#471f7a',
          900: '#341564',
        },
      },
    },
  },
  plugins: [],
};