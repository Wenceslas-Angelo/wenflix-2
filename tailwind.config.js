/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        light: '#eefffd',
        dark: '#1b1b1b',
        customBlue: '#0095F6',
        greenLight: '#05f2db',
        greenDark: '#31cc62',
        customRose: '#f631a7',
        yellow: '#f2db05',
        secondary: '#3b3b3b',
      },
    },
  },
  plugins: [],
};
