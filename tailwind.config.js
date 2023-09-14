/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      colors: {
        userPurple: "hsl(259, 100%, 65%)",
        userLightRed: "hsl(0, 100%, 67%)",
        userWhite: "hsl(0, 0%, 100%)",
        userOffWhite: "hsl(0, 0%, 94%)",
        userLightGrey: "hsl(0, 0%, 86%)",
        userSmokeyGrey: "hsl(0, 1%, 44%)",
        userOffBlack: "hsl(0, 0%, 8%)",
      },
    },
  },
  plugins: [],
}