/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f7f4',
          100: '#d4ebe4',
          200: '#a8d7c9',
          300: '#7cc3ae',
          400: '#50af93',
          500: '#2d8659',
          600: '#1f6241',
          700: '#1B5E20', // Dark green from logo
          800: '#0c1a11',
          900: '#030805',
        },
        accent: {
          gold: '#D4A574', // Exact gold from logo
          light: '#f5f5f5',
          yellow: '#F4C430', // Complementary yellow
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Georgia', 'serif'],
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #1B5E20 0%, #2d8659 100%)',
        'gradient-accent': 'linear-gradient(135deg, #D4A574 0%, #F4C430 100%)',
      },
      boxShadow: {
        'primary': '0 4px 6px rgba(27, 94, 32, 0.1)',
        'accent': '0 4px 6px rgba(212, 165, 116, 0.2)',
      },
    },
  },
  plugins: [],
}
