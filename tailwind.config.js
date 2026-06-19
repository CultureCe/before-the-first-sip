/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        espresso: { DEFAULT: '#3B2416', light: '#5C3D2E', dark: '#2A1810' },
        latte: { DEFAULT: '#E8D8C3', dark: '#D4C0A6' },
        offwhite: '#FAF8F5',
        gold: { DEFAULT: '#B08D57', light: '#C9A96E', dark: '#8A6D40' },
      },
      fontFamily: {
        playfair: ['var(--font-playfair)', 'Georgia', 'serif'],
        inter: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      animation: {
        steam: 'steam 4s ease-in-out infinite',
        'steam-delay-1': 'steam 4s ease-in-out infinite 1.3s',
        'steam-delay-2': 'steam 4s ease-in-out infinite 2.6s',
      },
      keyframes: {
        steam: {
          '0%': { transform: 'translateY(0) scaleX(1)', opacity: '0.6' },
          '50%': { transform: 'translateY(-45px) scaleX(1.25)', opacity: '0.3' },
          '100%': { transform: 'translateY(-85px) scaleX(1.5)', opacity: '0' },
        },
      },
    },
  },
  plugins: [],
}
