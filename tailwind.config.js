/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        blue:{
          650:"#2a8ac5",
          700:"#146eb4",
          800:"#1e2640",
          900:"#0e4f82",
        },
        black:{
          100:"#d9d9d9",
          400:"#4d4d4d",
        }
      }
    },
  },
  plugins: [],
}

