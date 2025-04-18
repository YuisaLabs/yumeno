/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'inter-tight': ['Inter Tight', 'sans-serif'],
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
