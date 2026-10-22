import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        /* Vejara Corporate Navy Palette */
        navy: {
          50: "#EEF2F8",
          100: "#D5E0EF",
          200: "#ABC1DF",
          300: "#80A2CF",
          400: "#5683BF",
          500: "#2B5EA7",
          600: "#1E4A8A",
          700: "#163770",
          800: "#0B1B33",
          900: "#071529",
          950: "#030914",
        },
        brandNavy: "#0B1B33",
        brandDark: "#071529",
        brandBlue: "#0284C7",
        brandCyan: "#38BDF8",
        brandAccent: "#0066FF",
        /* Industrial Amber / High-Vis Gold Accent */
        amber: {
          50: "#FFF8ED",
          100: "#FEEECA",
          200: "#FDDA94",
          300: "#FCC55E",
          400: "#FAB028",
          500: "#E88030",
          600: "#C96820",
          700: "#A35018",
          800: "#7C3810",
          900: "#562008",
        },
        /* Industrial Steel Grays */
        steel: {
          50: "#F8FAFC",
          100: "#F1F5F9",
          200: "#E2E8F0",
          300: "#CBD5E1",
          400: "#94A3B8",
          500: "#64748B",
          600: "#475569",
          700: "#334155",
          800: "#1E293B",
          900: "#0F172A",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        heading: ["var(--font-heading)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 2px 16px rgba(0,0,0,0.06)",
        "card-hover": "0 10px 30px -10px rgba(2,132,199,0.2)",
        navy: "0 8px 30px rgba(7,21,41,0.25)",
        blue: "0 4px 20px rgba(2,132,199,0.35)",
      },
      backgroundImage: {
        "hero-gradient": "linear-gradient(135deg, #071529 0%, #0B1B33 60%, #0047AB 100%)",
        "blue-gradient": "linear-gradient(135deg, #0052CC 0%, #0284C7 50%, #38BDF8 100%)",
        "glass-panel": "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.02) 100%)",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out both",
        "fade-in": "fadeIn 0.5s ease-out both",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
