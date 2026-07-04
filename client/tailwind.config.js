/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'expo-green': '#2D5A27',
        'expo-light': '#4A8B3C',
        'expo-gold': '#C9A84C',
        'expo-cream': '#F5F0E6',
        'expo-dark': '#1A1A1A',
      },
      fontFamily: {
        'thai': ['"Noto Sans Thai"', 'sans-serif'],
        'chinese': ['"Noto Sans SC"', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [],
}
