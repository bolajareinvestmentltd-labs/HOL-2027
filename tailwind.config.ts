import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-navy": "#1a3a52",
        "primary-gold": "#F59E0B",
        "primary-emerald": "#10B981",
        "accent-red": "#DC2626",
        "neutral-cream": "#F9FAFB",
        "neutral-charcoal": "#1F2937",
      },
    },
  },
  plugins: [],
};
export default config;
