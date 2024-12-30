/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ocean: {
          light: '#E0F7F6',
          DEFAULT: '#48B1BF',
          dark: '#06677D'
        },
        text: {
          primary: '#023047',
          secondary: '#235789',
          muted: '#406E8E',
          light: '#FFFFFF'
        }
      },
      backgroundImage: {
        'gradient-main': 'linear-gradient(to bottom right, #E0F7F6, #48B1BF, #06677D)'
      }
    },
  },
  plugins: [],
};