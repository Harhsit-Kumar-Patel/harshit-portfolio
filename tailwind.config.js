/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./data/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0f172a",
        muted: "#475569",
        accent: {
          DEFAULT: "#2563eb",
          soft: "#eff6ff",
          deep: "#1d4ed8"
        },
        canvas: {
          DEFAULT: "#ffffff",
          alt: "#fafbfb",
          warm: "#ffffff"
        }
      },
      boxShadow: {
        soft: "0 20px 60px rgba(15, 23, 42, 0.08)",
        lift: "0 18px 50px rgba(15, 23, 42, 0.12)"
      },
      backgroundImage: {
        "hero-grid":
          "linear-gradient(rgba(148, 163, 184, 0.14) 1px, transparent 1px), linear-gradient(90deg, rgba(148, 163, 184, 0.14) 1px, transparent 1px)"
      }
    }
  },
  plugins: []
};
