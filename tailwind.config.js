/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream:  { DEFAULT: '#FAF7F2', dark: '#F0EBE3' },
        nodo:   { DEFAULT: '#F26522', light: '#FF7A30', dark: '#D4551A' },
        dark:   { DEFAULT: '#1A1209', 800: '#2A1F0F', 700: '#3D2E18' },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
