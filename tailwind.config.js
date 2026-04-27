/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: '#FDF0E4',
          dark:    '#F5E6D6',
        },
        nodo: {
          DEFAULT: '#E8643C',
          light:   '#F07050',
          dark:    '#C8502C',
        },
        dark: {
          DEFAULT: '#1A0D06',
          800:     '#2A1A0E',
          700:     '#3D2A18',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
