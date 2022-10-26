/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      "forest",
      "garden",
      "retro",
      "bumblebee",
      "luxury",
      "pastel",
      "emerald",
    ],
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
