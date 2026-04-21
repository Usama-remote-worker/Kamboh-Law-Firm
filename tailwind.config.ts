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
        primary: '#003924', // Authorized Deep Forest Green
        secondary: '#FFFFFF',
        accent: '#B19044',  // Authorized Metallic Gold
        charcoal: '#333333',
        gold: {
          DEFAULT: '#B19044',
          light: '#C9A75F',
          dark: '#8E7336',
        },
        muted: '#F5F7FA',
        border: '#E5E7EB',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Montserrat', 'sans-serif'], // Heading font
      },
    },
  },
  plugins: [],
};

export default config;
