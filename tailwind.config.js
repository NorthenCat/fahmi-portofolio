/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#82AAE3",
        secondary: "#64748b",
        dark: "#0f172a",
        optional: "#EAFDFC",
        footer: "#91D8E4",
      },
    },
  },
  plugins: [],
};
