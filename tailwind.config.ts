import type { Config } from "tailwindcss";

const config: Config = {
  // mode: "jit",
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
        // "gray-i-900": "#212529",
        "gray-i-900": "#1F2226",
      
      },
    },
    // backgroundImage: theme => ({
    //   "img-background-projects": "url('/public/header-bg.svg')" 
    // })
  },
  plugins: [],
  
};
export default config;
