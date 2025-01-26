import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        brand: "#0069A7",
        brandGray: "#808284",
        grayBackground: "F9F9F9",
      },
      fontFamily: {
        alexandria: ["AlexandriaFLF", "sans-serif"],
        alexandriaBold: ["AlexandriaFLFBold", "sans-serif"],
        frutiger: ["Frutiger", "sans-serif"],
        frutigerBold: ["FrutigerBold", "sans-serif"],
      },
      width: {
        '2xs': '18rem',
        '7xl': '80rem',
      },
      fontsize: {
        xxs: '0.5rem',
      },
      letterSpacing: {
        '16p': '16%', // Add custom letter-spacing value
      },
    },
  },
  plugins: [],
} satisfies Config;
