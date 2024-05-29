/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          green: "#495E57",
          yellow: "#F4CE14",
          coral: "#EE9972",
          pink: "#FBDABB",
          lightGray: "#EDEFEE",
          darkGray: "#333333",
        },
      },
    },
  },
  plugins: [],
};
