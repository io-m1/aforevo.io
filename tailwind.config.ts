import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"], // THIS IS THE KEY CHANGE
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        mbi: {
          red: '#E63946',
          gold: '#FFD700',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
      },
    },
  },
  plugins: [],
};
export default config;
