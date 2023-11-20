import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        black: {
          DEFAULT: "#323232",
          0: "rgba(50, 50, 50, 0)",
          35: "rgba(50, 50, 50, 0.35)",
          45: "rgba(50, 50, 50, 0.45)",
          55: "rgba(50, 50, 50, 0.55)",
          65: "rgba(50, 50, 50, 0.65)",
          75: "rgba(50, 50, 50, 0.75)",
          85: "rgba(50, 50, 50, 0.85)",
          95: "rgba(50, 50, 50, 0.95)",
          100: "#323232"
        },
        white: {
          DEFAULT: "#fff",
          50: "#f7f7f7",
          40: "#F4F4F4",
          30: "#F8F8F8"
        },
        primary: {
          DEFAULT: "#437cff",
          "50": "#eef5ff",
          "100": "#d9e7ff",
          "200": "#bcd6ff",
          "300": "#8ebcff",
          "400": "#5997ff",
          "500": "#437cff",
          "600": "#1b4ef5",
          "700": "#143ae1",
          "800": "#1730b6",
          "900": "#192e8f",
          "950": "#141e57"
        },
        secondary: {
          DEFAULT: "#db598d",
          "50": "#fcf3f7",
          "100": "#fae9f1",
          "200": "#f6d4e4",
          "300": "#f0b1cd",
          "400": "#e57aa8",
          "500": "#db598d",
          "600": "#c83a6c",
          "700": "#ac2a54",
          "800": "#8f2546",
          "900": "#78233d",
          "950": "#480f21"
        },
        tertiary: {
          "50": "#fcf7fc",
          "100": "#faedfa",
          "200": "#f3dbf1",
          "300": "#e9bee5",
          "400": "#db97d4",
          "500": "#c86dbf",
          "600": "#a74c9c",
          "700": "#8d3e82",
          "800": "#74346a",
          "900": "#602f58",
          "950": "#3d1536"
        },
        basic: {
          DEFAULT: "#C5CEE0", // eva light
          100: "#FFFFFF",
          200: "#F7F9FC",
          300: "#EDF1F7",
          400: "#E4E9F2",
          500: "#C5CEE0",
          600: "#8F9BB3",
          700: "#2E3A59",
          800: "#222B45",
          900: "#1A2138",
          1000: "#151A30",
          1100: "#101426"
        },
        danger: {
          DEFAULT: "#FF4E53",
          100: "#FFEBE9",
          200: "#FFC3C4",
          300: "#FF9B9C",
          400: "#FF767C",
          500: "#FF4E53",
          600: "#DB323B",
          700: "#B71926",
          800: "#930F19",
          900: "#7A0A14"
        },

        success: {
          DEFAULT: "#5BD36B",
          500: "#5BD36B",
          600: "#42B55C",
          700: "#3ba051",
          800: "#2e7f42",
          900: "#1f5c2f",
          1000: "#144020",
          1100: "#0b2b15",
          1200: "#061a0c",
          1300: "#030b06"
        },
        warning: {
          DEFAULT: "#FCB353",
          500: "#FCB353",
          600: "#E89B3F",
          700: "#c47f32",
          800: "#9e6124",
          900: "#7a481a",
          1000: "#5a3412",
          1100: "#3e220b",
          1200: "#261207",
          1300: "#140b04"
        },
        info: {
          DEFAULT: "#28C2ED",
          500: "#28C2ED",
          600: "#1D98CB",
          700: "#1981aa"
        }
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))"
      }
    }
  },
  plugins: []
};
export default config;
