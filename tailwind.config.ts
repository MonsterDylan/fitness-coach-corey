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
          primary: "#DC2626",
          secondary: "#B91C1C",
          accent: "#EF4444",
          dark: "#0A0A0A",
          light: "#FECACA",
          muted: "#1A1A1A",
          surface: "#141414",
        },
      },
    },
  },
  plugins: [],
};

export default config;
