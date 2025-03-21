/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        "lexenda-regular": ["lexenda-regular", "sans-serif"],
        "lexenda-medium": ["lexenda-medium", "sans-serif"],
        "lexenda-semiBold": ["lexenda-semiBold", "sans-serif"],
        "lexenda-bold": ["lexenda-bold", "sans-serif"],
      },
    },
  },
  plugins: [],
};
