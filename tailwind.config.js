/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        mainb: "url('/src/images/HomePage/MainImage.webp')",
      },
    },
  },
  plugins: [],
};
