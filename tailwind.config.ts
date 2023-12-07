import type { Config } from "tailwindcss";
import tailwindScrollbar from 'tailwind-scrollbar';
import prettierPluginTailwindcss from 'prettier-plugin-tailwindcss';

const config: Config = {
  mode: "jit",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      textColor: {
        "stack-text": "#adb5bd"
      },
      colors: {
        "gray-i-900": "#1F2226",   
      },
      // screens: {
      //   "iPadAir": "820px"
      // },
      fontFamily: {
        raleway: ["var(--font-family-secondary)"]
      }
    },
  },
  plugins: [
    tailwindScrollbar,
  ],
  
};

export default config;