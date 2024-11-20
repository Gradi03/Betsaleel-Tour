/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        transparentBlue: "rgba(37, 99, 235, 0.5)", // Adjust the rgba values as needed
      },
    },
  },
  plugins: [],
};
