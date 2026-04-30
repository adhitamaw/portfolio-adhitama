import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "pop-red": "#FF1A1A",
        "pop-yellow": "#FFD700",
        "pop-blue": "#0057FF",
        "pop-magenta": "#FF00FF",
        "pop-cyan": "#00E5FF",
        "pop-green": "#39FF14",
        "pop-black": "#1A1A1A",
        "pop-white": "#FFFDF0",
        "pop-cream": "#FFF8E7",
      },
      fontFamily: {
        display: ["Bangers", "Space Grotesk", "sans-serif"],
        sans: ["Space Grotesk", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "0.5rem",
        lg: "1rem",
        xl: "1.5rem",
        full: "9999px",
      },
    },
  },
  plugins: [],
};

export default config;
