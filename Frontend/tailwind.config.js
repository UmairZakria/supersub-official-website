/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'inset-up-down': 'inset 0 8px 8px 10px 8px rgba(0, 0, 0, 0.1), inset 0 -8px 8px rgba(0, 0, 0, 0.1)', // Customize the values
      },
      

      },
    
  },
  plugins: [],
}