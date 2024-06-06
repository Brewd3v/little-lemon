/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  prefix: "",
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
