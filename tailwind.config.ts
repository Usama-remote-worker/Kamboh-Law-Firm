import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0D2C24', // Flyer Forest Green
        secondary: '#FFFFFF',
        accent: '#B8860B',  // Flyer Gold
        gold: {
          DEFAULT: '#B8860B',
          light: '#D4AF37',
          dark: '#8B6914',
        },
        muted: '#F0F4F2',
        border: '#E2E8E4',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Inter', 'sans-serif'], // Replacing serif with sans-serif as requested
      },
    },
  },
  plugins: [],
};

export default config;
