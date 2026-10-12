/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#071D3A',
        navy: '#0A2D5E',
        royal: '#154A93',
        sky: '#79C8F6',
        mist: '#F3F8FC',
        paper: '#FBFCFE',
        maroon: '#7F2037',
        eco: '#287A47'
      },
      boxShadow: {
        soft: '0 24px 70px rgba(7, 29, 58, 0.12)',
        card: '0 16px 40px rgba(7, 29, 58, 0.10)'
      }
    },
  },
  plugins: [],
}
