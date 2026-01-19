/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // MBI Brand Palette
        mbi: {
          black: "#0A0A0A", // Deep rich black for backgrounds
          red: "#E63946",   // Vibrant red for CTAs and accents
          gold: "#FFD700",  // Gold for premium indicators
          gray: "#1F1F1F",  // Surface color for cards
        }
      },
      fontFamily: {
        sans: ['var(--font-manrope)', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-cinematic': "url('/images/hero-cinematic-dark.jpg')", // We will add this asset later
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
};
