import {heroui} from '@heroui/theme';
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx,css}",
    "./node_modules/@heroui/theme/dist/components/(button|pagination|ripple|spinner).js"
  ],
  theme: {
    extend: {
      fontFamily: {
        opensan: ["Open Sans", "sans-serif"],
        popins: ["Poppins", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      spacing: {
        "60": "3.75rem",
        "107": "6.6875rem",
        "12": "0.75rem",
        "18": "1.125rem",
        "15": "0.9375rem",
        "20": "1.25rem",
        "24": "1.5rem",
        "30": "1.875rem",
      },
      fontSize: {
        "36": "2.25rem",
        "24": "1.5rem",
        "18": "1.125rem",
        "15": "0.9375rem",
        "12": "0.75rem",
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(315deg, rgba(51,17,64,1) 0%, rgba(180,93,222,1) 15%, rgba(242,185,89,1) 26%, rgba(245,224,104,1) 100%)",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        fade: "#808080",
        blogSec: "#333333",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate"),heroui()],
};
export default config;
