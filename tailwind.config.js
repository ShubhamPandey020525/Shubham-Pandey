/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        navy: "#143464",
        navyLight: "#1e4a8a",
        background: "#0a0d14",
        surface: "#0f1520",
        surfaceHover: "#121a2a",
      },
      fontFamily: {
        display: ["Space Grotesk", "sans-serif"],
        body: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      boxShadow: {
        navy: "0 0 20px rgba(20, 52, 100, 0.3)",
      },
    },
  },
  plugins: [],
}
