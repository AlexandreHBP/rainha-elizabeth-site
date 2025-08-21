/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'royal-red': '#dc2626',
        'royal-gold': '#d97706',
        'royal-dark-red': '#991b1b',
        'royal-light-gold': '#fbbf24',
        'cream': '#fefce8',
        'navy': '#1e293b'
      },
      fontFamily: {
        'serif': ['Georgia', 'serif'],
        'elegant': ['Playfair Display', 'serif']
      }
    },
  },
  plugins: [],
} 