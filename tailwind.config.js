/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0097a7ff",
        secondary: "rgb(0, 102, 113)",
        content: "#334157",
        light: "#f1f5f9",
        dark: "#cbd5e1",
      },
    },
  },
  plugins: [],
};
