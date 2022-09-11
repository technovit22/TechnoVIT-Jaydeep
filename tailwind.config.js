/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'space': '#38226A',
      },
      backgroundImage: {
        'spaceBg': "url('../public/space-bg.gif')",
      },
      fontFamily: {
        'spaceMono': ['Space Grotesk', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
      },
      colors: {
        'neonBlue': '#70d6ff',
      }
    },
  },
  plugins: [],
}
