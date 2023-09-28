import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "gradient-linear": "linear-gradient(to right, rgb(3, 3, 55), black 60%)",
        "gradient-invert": "linear-gradient(to right , rgb(3, 3, 55), black)",
        // "alternate-gradient": "linear-gradient(to right, rgb(44, 62, 80) rgb(75, 73, 72),"
        // "alternate-gradient": "linear-gradient(to right, rgb(15, 32, 39), rgb(32, 58, 67),"
        // "alternate-gradient": "linear-gradient(to right, rgb(55, 59, 68), rgb(66, 134, 244)",
        "alternate-gradient": "linear-gradient(to right, rgb(182, 1, 1), rgb(66, 134, 244)"
      }),
      transitionDuration: {
        "0": "0ms",
      },
      textColor: {
        "stack-text": "#adb5bd"
      },
      variants: {
        transitionDuration: ["responsive", "hover", "focus"],
      },
    },
  
  },
  plugins: [],
};
export default config;
