import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        fitness: {
          primary: "#10B981",
          secondary: "#059669",
          accent: "#34D399",
          dark: "#064E3B",
          light: "#D1FAE5",
        },
      },
    },
  },
  plugins: [],
};

export default config;
