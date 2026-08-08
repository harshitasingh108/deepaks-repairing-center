/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2563EB",
        primaryHover: "#1D4ED8",

        heading: "#0F172A",
        paragraph: "#64748B",

        border: "#E2E8F0",

        background: "#FFFFFF",

        success: "#22C55E",

        danger: "#EF4444",
      },

      fontFamily: {
        heading: ["Space Grotesk", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },

      boxShadow: {
        navbar: "0 8px 25px rgba(15,23,42,0.08)",
        card: "0 10px 30px rgba(15,23,42,0.08)",
      },

      borderRadius: {
        xl2: "20px",
      },
    },
  },
  plugins: [],
};