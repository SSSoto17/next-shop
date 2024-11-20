/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        main: "minmax(1rem, 1fr) minmax(0, 1200px) minmax(1rem, 1fr)",
      },
      dropShadow: {
        main: "0 2px 6px rgba(0, 0, 0, 0.15)",
      },
      colors: {
        "main-background": "#f2f2f2",
        "silver-chalice": {
          50: "#f7f7f7",
          100: "#ededed",
          200: "#dfdfdf",
          300: "#c8c8c8",
          400: "#b3b3b3",
          500: "#999999",
          600: "#888888",
          700: "#7b7b7b",
          800: "#676767",
          900: "#545454",
          950: "#363636",
        },
        apple: {
          50: "#f4faf3",
          100: "#e4f6e2",
          200: "#caebc7",
          300: "#9fda9b",
          400: "#6ec068",
          500: "#4fb148",
          600: "#388732",
          700: "#2f6a2b",
          800: "#285526",
          900: "#224621",
          950: "#0e260d",
        },
        tabasco: {
          50: "#fff2f1",
          100: "#ffe4e1",
          200: "#ffcdc8",
          300: "#ffaaa1",
          400: "#fe7a6b",
          500: "#f6503d",
          600: "#e4321e",
          700: "#c02615",
          800: "#a22416",
          900: "#832419",
          950: "#480e07",
        },
      },
    },
  },
  plugins: [],
};
