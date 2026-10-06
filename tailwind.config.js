/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#FBF4E6',
        ink: '#191919',
        // Crayn AI brand palette
        graphite: '#0B0F14',
        slate: { brand: '#4B5563' },
        silver: '#CBD5E1',
        crayn: '#7DA3FF',
        cloud: '#F8FAFC',
      },
    },
  },
  plugins: [],
}
