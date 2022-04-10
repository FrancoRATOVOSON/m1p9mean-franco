module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      boxShadow: {
        base: '0 2px 4px rgba(10, 30, 30, 0.3)',
        hover: '2px 4px 16px rgba(10, 30, 30, 0.6)',
      },
    },
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },
  },
  plugins: [],
}
