/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: '#F97316',
          deep: '#0D0D0D',
          slate: '#1A1A1A',
          pop: '#D946EF',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        focus: '0 0 0 3px rgba(249, 115, 22, 0.5)',
      },
      transitionProperty: {
        spacing: 'margin, padding',
        glow: 'box-shadow, background-color, color',
      },
    },
  },
  plugins: [],
};
