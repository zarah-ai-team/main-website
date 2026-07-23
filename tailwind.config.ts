import type { Config } from "tailwindcss";

/**
 * Zarah AI design-system mapping.
 * Tokens live as CSS variables in src/app/globals.css (space-separated RGB
 * channels), sourced from the "Zarah AI Design System" claude.ai/design
 * project. Layout: 1280px max container; margins 80/40/20 (desktop/tablet/
 * mobile); radii 8px buttons / 12px cards; shadows sm/md/lg only.
 */
const config: Config = {
  content: ["./src/**/*.{ts,tsx,js,jsx,mdx}"],
  theme: {
    container: {
      center: true,
      // Compact outer margins: 16 mobile / 24 tablet / 40 desktop
      padding: {
        DEFAULT: "16px",
        md: "24px",
        xl: "40px",
      },
      // Full breakpoint map so responsive padding keys resolve;
      // container grows to 1440px on very wide screens to reduce dead margins.
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1440px",
      },
    },
    extend: {
      colors: {
        bg: "rgb(var(--bg) / <alpha-value>)",
        surface: "rgb(var(--surface) / <alpha-value>)",
        "surface-2": "rgb(var(--surface-2) / <alpha-value>)",
        border: "rgb(var(--border) / <alpha-value>)",
        content: "rgb(var(--content) / <alpha-value>)",
        muted: "rgb(var(--muted) / <alpha-value>)",
        accent: "rgb(var(--accent) / <alpha-value>)",
        "accent-hover": "rgb(var(--accent-hover) / <alpha-value>)",
        "accent-soft": "rgb(var(--accent-soft) / <alpha-value>)",
        "carbon-900": "rgb(var(--carbon-900) / <alpha-value>)",
        "carbon-800": "rgb(var(--carbon-800) / <alpha-value>)",
        "carbon-600": "rgb(var(--carbon-600) / <alpha-value>)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        "brand-sm": "0 1px 2px rgba(31, 31, 31, 0.35)",
        "brand-md": "0 4px 12px rgba(31, 31, 31, 0.5)",
        "brand-lg": "0 12px 32px rgba(31, 31, 31, 0.6)",
      },
      transitionDuration: {
        "120": "120ms",
        "320": "320ms",
      },
    },
  },
  plugins: [],
};

export default config;
