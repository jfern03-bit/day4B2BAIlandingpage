/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'instrument-serif': ['Instrument Serif', 'serif'],
        'sans': ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      animation: {
        'fade-slide-in-1': 'fadeSlideIn 0.6s ease-out 0.1s both',
        'fade-slide-in-2': 'fadeSlideIn 0.6s ease-out 0.2s both',
        'fade-slide-in-3': 'fadeSlideIn 0.6s ease-out 0.3s both',
        'fade-slide-in-4': 'fadeSlideIn 0.6s ease-out 0.4s both',
      },
      keyframes: {
        fadeSlideIn: {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
    },
  },
  plugins: [],
}
