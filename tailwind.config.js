import { main } from 'motion/react-client';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00D1FF',
        secondary: '#00242C',
      },
    },
  },
  plugins: [],
}