import type { Config } from "tailwindcss";

const config: Config = {
  
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        wave: {
          '0%': { transform: 'rotate(0.0deg)' },
          '10%': { transform: 'rotate(9deg)' },
          '20%': { transform: 'rotate(-6deg)' },
          '30%': { transform: 'rotate(7deg)' },
          '40%': { transform: 'rotate(-4deg)' },
          '50%': { transform: 'rotate(6.0deg)' },
          '60%': { transform: 'rotate(-3deg)' },
          '80%': { transform: 'rotate(0.0deg)' },
          '100%': { transform: 'rotate(0.0deg)' },
        },
      },
      animation: {
        'jiggle': 'wave 2s linear 1',
      },
    },
  },
  plugins: [],
};
export default config;
