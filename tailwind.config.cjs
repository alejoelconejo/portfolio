/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: '#f432cf', hover: '#dd2cba' },
        secondary: '#a39bf9',
        darkGray: '#191919',
        background: '#222222',
      },
    },

    fontFamily: {
      sans: ['Inter', 'ui-sans-serif', 'system-ui'],
    },
  },
  plugins: [],
}
