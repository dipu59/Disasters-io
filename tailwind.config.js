/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        orange: '0 6px 18px rgba(242, 105, 34, 0.50)',
      },
    },
  },
  plugins: [],
}

