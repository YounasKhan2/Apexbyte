import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#2563EB",
          50: "#EEF3FF",
          100: "#D9E6FF",
          200: "#B9CFFF",
          300: "#8FAEFF",
          400: "#5C86F4",
          500: "#2563EB",
          600: "#1D4FD8",
          700: "#1E3FAE",
        },
        purple: {
          DEFAULT: "#9333EA",
        },
        highlight: "#FACC15",
        surface: {
          subtle: "#F8FAFC",
          soft: "#F1F5F9",
          glass: "rgba(255,255,255,0.6)",
        },
      },
      boxShadow: {
        glow: "0 10px 25px -5px rgba(37,99,235,0.2), 0 8px 10px -6px rgba(147,51,234,0.2)",
        soft: "0 8px 30px rgba(0,0,0,0.06)",
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '1.5rem',
          lg: '2rem',
          xl: '2.5rem',
          '2xl': '3rem',
        },
      },
      fontFamily: {
        heading: ["var(--font-poppins)"],
        body: ["var(--font-inter)"],
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

export default config;
