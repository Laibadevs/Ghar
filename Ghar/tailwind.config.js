/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        g: '#2FA084',
        gd: '#1F6F5F',
        gl: 'rgba(47,160,132,0.12)',
      },
      fontFamily: {
        serif: ['"DM Serif Display"','Georgia','serif'],
        sans:  ['Inter','system-ui','sans-serif'],
        cardo: ['Cardo','Georgia','serif'],
        noto:  ['"Noto Sans"','system-ui','sans-serif'],
      },
    },
  },
  plugins: [],
}