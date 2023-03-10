const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        serif: [
          ...defaultTheme.fontFamily.serif
        ],
        mono: [
          "consolas",
          ...defaultTheme.fontFamily.mono
        ]
      }
    },
    colors: {
      black: '#282828',
      grey: '#767676',
      white: '#F8F8F8'
    }
  },
  plugins: [],
}
