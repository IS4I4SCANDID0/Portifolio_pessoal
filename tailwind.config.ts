import type { Config } from "tailwindcss";

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
      // variants: {
      //   transitionDuration: ["responsive", "hover", "focus"],
      // },
      colors: {
        "gray-i-800": "#343a40"
      }
    },
  
  },
  plugins: [],
};
export default config;
