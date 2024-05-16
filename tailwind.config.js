/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderColor: {
        'black-opacity-50': 'rgba(0, 0, 0, 0.5)',
      },
      colors: {
        'custom-green': '#E9F8E5',
        'custom-gray-text': '#B0BAC3'
      },
      boxShadow: {
        'custom-frame': '105px 198px 90px rgba(0, 0, 0, 0.03), 59px 111px 76px rgba(0, 0, 0, 0.09), 26px 49px 56px rgba(0, 0, 0, 0.15), 7px 12px 31px rgba(0, 0, 0, 0.18)',
      },
    },
  },
  plugins: [],
}