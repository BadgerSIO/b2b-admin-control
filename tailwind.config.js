/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        borderGray: "#cacaca",
      },
      gridTemplateColumns: {
        fluid: "repeat(auto-fit,minmax(10rem,1fr))",
        fluid2: "repeat(auto-fit,minmax(20rem,1fr))",
      },
    },
  },
  plugins: [require("daisyui")],
};
