/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#2bee6c", // Fresh Green
        "primary-dim": "#A0CC6B",
        "background-dark": "#0A0A0A", // Deep Black
        "background-light": "#f6f8f6", // Off-white
        "surface-dark": "#161616", // Card Black
        "surface-highlight": "#23262D",
        "surface-light": "#FFFFFF",
        "text-dim": "#9CA3AF",
        
        // Accents
        "accent-purple": "#C084FC",
        "accent-blue": "#60A5FA",
        "accent-pink": "#F472B6",
        "accent-orange": "#F97316",
        "accent-red": "#EF4444",
        "accent-lavender": "#D4B6FF", // Subs Tracker
        "accent-indigo": "#6366F1", // Expense Form

        // Investment Theme (Teal)
        "invest-primary": "#3DE0C4",
      },
      borderRadius: {
        '3xl': '1.5rem', // 24px
        '4xl': '2rem',   // 32px
      }
    },
  },
  plugins: [],
}
