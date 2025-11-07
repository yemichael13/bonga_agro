/**
 * PostCSS configuration using the new Tailwind PostCSS plugin package.
 * Tailwind v4 moved the PostCSS plugin to `@tailwindcss/postcss`.
 */
module.exports = {
  plugins: [
    require('@tailwindcss/postcss'),
    require('autoprefixer'),
  ],
};
