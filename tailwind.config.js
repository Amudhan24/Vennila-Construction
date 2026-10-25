/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FDFCF9',
          100: '#FAF9F6',
          200: '#F5F2EB',
          300: '#F1EBDD',
          400: '#E7E2D8',
        },
        gold: {
          50: '#FAF6EB',
          100: '#F3E8CC',
          200: '#E1C477',
          300: '#D5AA54',
          400: '#C89B3C',
          500: '#B08328',
          600: '#946B1F',
          700: '#755217',
        },
        charcoal: {
          800: '#252525',
          900: '#171717',
          950: '#0F0F0F',
        },
        luxury: {
          bg: '#FAF9F6',
          beige: '#F1EBDD',
          border: '#E7E2D8',
          gold: '#C89B3C',
          lightGold: '#E1C477',
          dark: '#171717',
          charcoal: '#252525',
        }
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'Playfair Display', 'Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'Inter', 'Manrope', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'luxury': '0 20px 40px -15px rgba(23, 23, 23, 0.07)',
        'luxury-hover': '0 30px 60px -20px rgba(200, 155, 60, 0.15)',
        'glass': '0 8px 32px 0 rgba(23, 23, 23, 0.05)',
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #E1C477 0%, #C89B3C 50%, #946B1F 100%)',
        'dark-gradient': 'linear-gradient(180deg, #252525 0%, #171717 100%)',
        'soft-gradient': 'linear-gradient(180deg, #FAF9F6 0%, #F1EBDD 100%)',
      }
    },
  },
  plugins: [],
}
