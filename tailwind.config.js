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
        surfaceLight: "#151d2e",
        accent: "#06b6d4",
        accentAlt: "#8b5cf6",
      },
      fontFamily: {
        display: ["Space Grotesk", "sans-serif"],
        body: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      boxShadow: {
        navy: "0 0 20px rgba(20, 52, 100, 0.3)",
        glow: "0 0 20px rgba(6, 182, 212, 0.15)",
        glowLg: "0 0 40px rgba(6, 182, 212, 0.2), 0 0 80px rgba(139, 92, 246, 0.1)",
      },
      animation: {
        'gradient': 'gradient 8s ease infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
  plugins: [],
}
