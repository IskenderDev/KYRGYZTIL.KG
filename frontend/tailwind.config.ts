import forms from "@tailwindcss/forms";
import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        surface: "#FFFFFF",
        "surface-muted": "#F5F7FA",
        ink: "#111827",
        "ink-soft": "#4B5563",
        "ink-muted": "#6B7280",
        border: "#DCE2E8",
        "border-dark": "#B8C2CC",
        brand: {
          DEFAULT: "#124A8C",
          hover: "#0D396D",
          light: "#EAF2FB",
          deep: "#071B33"
        },
        accent: {
          red: "#EF2B24",
          sky: "#0B8AC6",
          gold: "#F6C549",
          mint: "#DDF7ED"
        },
        error: "#B42318",
        success: "#027A48"
      },
      fontFamily: {
        sans: [
          "Manrope",
          "Inter",
          "Noto Sans",
          "Golos Text",
          "system-ui",
          "sans-serif"
        ]
      },
      boxShadow: {
        menu: "0 18px 45px rgba(17, 24, 39, 0.16)"
      }
    }
  },
  plugins: [forms]
} satisfies Config;
