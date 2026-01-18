/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.5rem",
        lg: "2rem",
      },
      screens: {
        xl: "1280px",
        "2xl": "1440px",
      },
    },
    extend: {
      colors: {
        brand: {
          navy: "#0B1220",
          green: "#22C55E",
          light: "#F8FAFC",
          border: "#E5E7EB",
          text: "#0F172A",
          muted: "#64748B",
        },
        navy: "#0B1220",
        primary: "#22C55E",
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.25rem",
      },
      boxShadow: {
        soft: "0 8px 24px rgba(0,0,0,0.06)",
        hover: "0 12px 30px rgba(0,0,0,0.10)",
      },
    },
  },
  plugins: [],
};
