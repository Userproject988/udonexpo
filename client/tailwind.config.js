/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'darkness': '#1B1B09',
        'turtle': '#363919',
        'saratoga': '#595C31',
        'lime': '#838450',
        'leek': '#B7B47B',
        'daisy': '#ECE6C0',
      },
      fontFamily: {
        'serif': ['"Playfair Display"', '"Noto Serif"', 'Georgia', 'serif'],
        'sans': ['"Inter"', 'system-ui', 'sans-serif'],
        'thai': ['"Noto Sans Thai"', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'fade-up': 'fadeUp 0.8s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}
