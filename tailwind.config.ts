import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        forest: {
          50: "#f1f7f3",
          100: "#dceae0",
          200: "#b6d1c0",
          300: "#86b297",
          400: "#5a8f70",
          500: "#3d7355",
          600: "#2d5c43",
          700: "#234837",
          800: "#1a3a2c",
          900: "#0f2a20",
          950: "#082018",
        },
        sand: {
          50: "#faf7f1",
          100: "#f3ecde",
          200: "#e6d8bc",
        },
        ink: "#0a1f17",
      },
      fontFamily: {
        sans: ["ui-sans-serif", "system-ui", "-apple-system", "Segoe UI", "Roboto", "sans-serif"],
        serif: ["ui-serif", "Georgia", "serif"],
      },
      backgroundImage: {
        "dot-grid":
          "radial-gradient(rgba(255,255,255,0.08) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
} satisfies Config;
