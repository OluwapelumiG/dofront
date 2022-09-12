/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/components/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow:{
        mobileShadow1: '4.1px -5px 0 0 rgb(17, 24, 39)',
        mobileShadow2: '-4.1px -5px 0 0 rgb(17, 24, 39)',

        desktopShadow1: '4.1px 5px 0 0 rgb(17, 24, 39)',
        desktopShadow2: '-4.1px 5px 0 0 rgb(17, 24, 39)',
      },
    },
    screens: {
      'mobile': '370px',
      // => @media (min-width: 640px) { ... }

      'tablet': '670px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
  },
  plugins: [],
}
