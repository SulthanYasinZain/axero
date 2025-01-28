import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        text: "#080e05",
        background: "#fbfdf9",
        primary: {
          50: "#0c1307",
          100: "#18260d",
          200: "#304c1a",
          300: "#487227",
          400: "#5f9834",
          500: "#77be41",
          600: "#92cb67",
          700: "#aed88d",
          800: "#c9e5b3",
          900: "#e4f2d9",
          950: "#f1f8ec",
        },
        secondary: {
          50: "#07130b",
          100: "#0d2616",
          200: "#1a4c2c",
          300: "#277241",
          400: "#349857",
          500: "#41be6d",
          600: "#67cb8a",
          700: "#8dd8a7",
          800: "#b3e5c5",
          900: "#d9f2e2",
          950: "#ecf8f0",
        },
        accent: {
          50: "#07130d",
          100: "#0d261a",
          200: "#1a4c35",
          300: "#27724f",
          400: "#349869",
          500: "#41be84",
          600: "#67cb9c",
          700: "#8dd8b5",
          800: "#b3e5ce",
          900: "#d9f2e6",
          950: "#ecf8f3",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
