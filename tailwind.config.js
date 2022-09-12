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
        'gateBg': "url('../public/vitgate.png')",
        'natureBg': "url('../public/natureBg.jpg')",
        'natureBg1': "url('../public/natureBg1.gif')",
        'natureBg2': "url('../public/natureBg2.gif')",
        'natureBg3': "url('../public/natureBg3.gif')",
      },
      fontFamily: {
        'spaceMono': ['Space Grotesk', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
        'nanum': ['Nanum Gothic', 'sans-serif'],
      },
      colors: {
        'neonBlue': '#70d6ff',
      },
    },
  },
  plugins: [],
}
