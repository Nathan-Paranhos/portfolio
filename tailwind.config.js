/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './**/*.{js,ts,jsx,tsx}'], 
  theme: {
    extend: {
      colors: {
        background: '#0a0a0a',
        'background-light': '#141414',
        primary: '#5a139c',
        secondary: '#00FFFF',
        accent: '#501f7d',
        success: '#23ba60',
        warning: '#ffc107',
        error: '#ed382b',
        'text-primary': '#ffffff',
        'text-secondary': '#b3b3b3',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
      animation: {
        'circuit-flow': 'flow 20s linear infinite',
        'fade-in': 'fadeIn 0.7s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        flow: {
          '0%': { backgroundPosition: '0% 0%' },
          '100%': { backgroundPosition: '100% 100%' },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
      },
      backgroundImage: {
        'circuit-pattern': "url('circuit-pattern.svg')", 
      },
    },
  },
  plugins: [],
};
