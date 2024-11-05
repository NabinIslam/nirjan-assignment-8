/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sora: ["Sora", "serif"],
    },
    container: {
      center: true,
      padding: "2rem",
    },
    extend: {
      color: {
        primary: "#9538E2",
      },
    },
  },
  plugins: [require("daisyui")],
};
