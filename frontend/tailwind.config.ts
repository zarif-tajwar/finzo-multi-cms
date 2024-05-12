import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ["var(--font-primary)", ...fontFamily.sans],
      },
      colors: {
        primary: "rgb(var(--color-primary) / <alpha-value>)",
        offwhite: "rgb(var(--color-offwhite) / <alpha-value>)",
      },
      screens: {
        container: "84rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      spacing: {
        "18": "4.5rem",
        "105": "26.25rem",
      },
    },
  },
  plugins: [],
};
export default config;
