/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customRed: '#D05663',
        focusColor: '#80bdff',
        buttonColor: '#20c997',
        hoverColor: '#17a184'
      },
      boxShadow: {
        'custom': '0 0 5px rgba(128, 189, 255, 0.5)',
      },
      gradientColorStops: {
        'custom-green': '#20c997',
        'custom-green-dark': '#009d80',
        'custom-gray': '#808080',
        'custom-gray-dark': '#696969',
      },
    },
  },
  plugins: [],
}

