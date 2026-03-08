/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        dyutiTeal: "#43B6B1",
        dyutiOrange: "#E3A226"
      }
    }
  },
  plugins: []
};
