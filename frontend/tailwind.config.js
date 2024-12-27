/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        purple:{
          200 : "#DCE5FD",
          600 : "#4746DA",
        },
        gray: {
          200 : "#F6F8FB",
          300 : "#F6F8FB",
          400 : "#B2B2B5"
        }
      }
    },
  },
  plugins: [],
}

