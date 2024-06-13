/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-calm-elegant": "linear-gradient(90deg, #A6C4C0, #D1A9B0, #7B8E8E)",
      },
      colors: {
        "calm-start": "#A6C4C0",
        "elegant-middle": "#D1A9B0",
        "calm-end": "#7B8E8E",
        primary: { "50": "#eff6ff", "100": "#dbeafe", "200": "#bfdbfe", "300": "#93c5fd", "400": "#60a5fa", "500": "#3b82f6", "600": "#2563eb", "700": "#1d4ed8", "800": "#1e40af", "900": "#1e3a8a", "950": "#172554" },
      },
      fontFamily: {
        display: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};