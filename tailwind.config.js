/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      maxWidth: {
        '1280px': '1280px',
      },
      height: {
        '140px': '140px',
        '155px': '155px',
      },
      width: {
        '395px': '395px',
      },
      fontFamily: {
        noto: ['Noto Sans JP', 'sans-serif'],
      },
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
