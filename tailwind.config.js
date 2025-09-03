// tailwind.config.js
import { defineConfig } from 'tailwindcss/helpers'

export default defineConfig({
  theme: {
    extend: {
      colors: {
        webzio: {
          primary: "#2D151F",   // Deep Maroon
          secondary: "#F4F3DC", // Light Cream
          dark: "#1A1A1A",      // Neutral Dark
          light: "#F9F9F7",     // Neutral Light
          gray: "#A6A6A6",      // Muted Gray
          gold: "#C19A6B",      // Accent Gold
          rose: "#8B5E6B",      // Accent Rose
          contrast: "#3D5A80",  // Contrast Blue
        },
      },
    },
  },
  plugins: [],
})
