/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        maya: "#67B7D1", // faded blue signage
        brick: "#B4413E", // brick red
        mustard: "#D9A441", // mustard yellow
        bottle: "#2E5E4E", // bottle green
        chalk: "#F2F1E8", // chalk white
        wood: "#A3846A", // weathered wood
      },
      fontFamily: {
        sign: ["Alfa Slab One", "system-ui", "sans-serif"],
        body: ["Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        signage: "0 2px 0 rgba(0,0,0,0.2), 0 4px 0 rgba(0,0,0,0.1)",
        sticker: "0 6px 18px rgba(0,0,0,0.15)",
      },
      backgroundImage: {
        paper: "radial-gradient(rgba(0,0,0,0.05) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "16px 16px",
      },
      rotate: {
        2: "2deg",
        3: "3deg",
      },
    },
  },
  plugins: [],
}
