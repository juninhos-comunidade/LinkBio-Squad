/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          default: "#7924ec",
          light: "#d580f8",
          subtle: "rgba(121, 36, 236, 0.12)",
        },
        surface: {
          base: "#05041a",
          card: "#08071f",
          elevated: "#0c0a28",
        },
        text: {
          primary: "#ffffff",
          muted: "#9ca3af",
        },
      },
      fontFamily: {
        display: ["Outfit", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
    },
  },
  plugins: [],
};
