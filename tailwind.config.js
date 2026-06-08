/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/ancap.html",
    "./index.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        mont: ['Montserrat', 'sans-serif'], // Cambia 'sans' por el nombre de tu clase personalizada si prefieres
        exo: ['Exo+2', 'sans-serif'],
        jost: ['Jost', 'sans-serif']
      },
    },
  },
}
