/**
 * Tailwind configuration for the project.
 * This file mirrors what `npx tailwindcss init -p` would create.
 */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
        fontFamily: {
        quicksand: ["Quicksand", "sans-serif"], // ✅ add this line
      },
    },
  },
  plugins: [],
};
