/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        'custom-scrollbar-thumb': '1px',
      },
    },

  },
  plugins: [require("daisyui"), require('tailwind-scrollbar'),],
  daisyui: {
    themes: ["light", "dark"],
  },
}

