module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        'lg': '0px 4px 8px rgba(0, 0, 0, 0.2)', // Adjust the values to your preference
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
