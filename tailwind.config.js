/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'slide1': "url('/images/e10.b534f5ca27bb10795ffb.jpg')",
        'slide2': "url('/images/e11.2d00e0fc48f03f0176f9.jpg')",
        'slide3': "url('/images/t10.01fa6ef74fcc289bbd8f.jpg')",
        'slide4': "url('/images/w2.ec6ec951e9bd7d1ab91e.jpg')",
        'fon': "url('/images/background-fon.png')",
      },
    },
  },
  plugins: [],
}
