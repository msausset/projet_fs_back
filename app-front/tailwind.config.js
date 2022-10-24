module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: "'Montserrat', serif",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
