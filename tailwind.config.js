/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#FDFBF5',
          100: '#FAF5E4',
          200: '#F4E7BD',
          300: '#EBD28F',
          400: '#E0BC5C',
          500: '#D4AF37', // Pure Classic Gold
          600: '#B89225',
          700: '#8E6F18',
          800: '#684E14',
          900: '#473411',
          950: '#2A1D07',
        },
        champagne: {
          100: '#FFFDF6',
          200: '#FFF8E6',
          300: '#FEEFC8',
          400: '#FCE4A6',
          500: '#F9D479',
        },
        noir: {
          950: '#070503',
          900: '#0B0907',
          850: '#110D09',
          800: '#17120C',
          750: '#1E1710',
          700: '#261E15',
        },
      },
      fontFamily: {
        serif: ['Cinzel', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['Montserrat', 'system-ui', '-apple-system', 'sans-serif'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #FFE8A3 0%, #D4AF37 50%, #8E6F18 100%)',
        'gold-radial': 'radial-gradient(circle at center, rgba(212, 175, 55, 0.25) 0%, rgba(11, 9, 7, 0) 70%)',
        'gold-shimmer': 'linear-gradient(90deg, transparent 0%, rgba(255, 240, 180, 0.4) 50%, transparent 100%)',
      },
      boxShadow: {
        'gold-glow': '0 0 25px rgba(212, 175, 55, 0.35)',
        'gold-glow-lg': '0 0 50px rgba(212, 175, 55, 0.45)',
        'card-glow': '0 10px 30px -5px rgba(0, 0, 0, 0.8), 0 0 20px 2px rgba(212, 175, 55, 0.25)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        },
      },
    },
  },
  plugins: [],
};
