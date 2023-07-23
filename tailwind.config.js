/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      fontFamily: {
        monserrat: ['Monserrat'],
        monserratAlternative: ['Monserrat Alternative'],
        ntr: ['NRT'],
      },
      colors: {
        blue: {
          1: '#00D0FB',
          2: '#0075F9',
          3: '#2001FF',
        },
        neutral: {
          1: '#313131',
          2: '#1F1F1F',
          3: '#0D0D0D',
        },
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out 1',
        bounce1s: 'bounce 1s ease-in-out 1',
      }
    },
  },
  plugins: [],
}