import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        trail: {
          50: "#EEF3EA",
          100: "#D9E5D0",
          200: "#B3CBA1",
          300: "#8CB172",
          400: "#5E8B49",
          500: "#3D6B2C",
          600: "#2F5233",
          700: "#24401F",
          800: "#1B2F18",
          900: "#131F11",
        },
        sunrise: {
          50: "#FFF4E6",
          100: "#FFE1BD",
          200: "#FFC87F",
          300: "#F7A94B",
          400: "#EE9328",
          500: "#E8871E",
          600: "#C46D14",
          700: "#98530F",
        },
        sky: {
          400: "#6F9CB0",
          500: "#4C7A92",
          600: "#3A6275",
        },
        canvas: "#F5F6F0",
        surface: "#FFFFFF",
        ink: "#1C2620",
        inkmuted: "#4B564E",
      },
      fontFamily: {
        display: ["var(--font-archivo)", "system-ui", "sans-serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        prose: "72ch",
      },
    },
  },
  plugins: [],
};
export default config;
