/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        tlc: {
          blue: '#51688B',   // Primary Slate Blue from logo
          gold: '#EAA336',   // Accent Golden Yellow from logo
          dark: '#1E293B',   // Dark Slate for primary text
          light: '#F8FAFC',  // Light background neutral
        }
      }
    },
  },
  plugins: [],
}