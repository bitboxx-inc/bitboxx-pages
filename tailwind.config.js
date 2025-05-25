/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        yellow: '#FFDD43',
        black: '#000000',
        white: '#FFFFFF',
        gray: '#F1F1F1',
        light_yellow: '#FFF0B3',
      },
    },
  },
  plugins: [],
}
