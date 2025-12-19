import typography from '@tailwindcss/typography'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#0ea5e9',
          green: '#10b981',
          dark: '#0f172a',
        },
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '1.25rem',
          lg: '2rem',
          xl: '2rem',
          '2xl': '2.5rem',
        },
      },
      boxShadow: {
        soft: '0 10px 25px -10px rgba(2,132,199,0.25)',
      },
    },
  },
  plugins: [typography],
}
