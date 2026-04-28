/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: '#FFF4E6',
          dark:    '#F5E8D4',
        },
        nodo: {
          DEFAULT: '#FF8A3D',
          light:   '#FFA060',
          dark:    '#E06D20',
        },
        dark: {
          DEFAULT: '#1A0F08',
          800:     '#2A1A0E',
          700:     '#3D2A18',
        },
      },
      fontFamily: {
        sans: ["'Space Grotesk'", 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
