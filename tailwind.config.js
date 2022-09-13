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
        'spaceBg': "url('/space-bg.gif')",
        'gateBg': "url('/vitgate.png')",
        'natureBg': "url('/natureBg.png')",
        'natureBg1': "url('/natureBg1.gif')",
        'natureBg2': "url('/natureBg2.gif')",
        'natureBg3': "url('/natureBg3.gif')",
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