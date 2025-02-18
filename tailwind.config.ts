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
        // background: "var(--background)",
        // foreground: "var(--foreground)",
        darkGray: "#2E2E2E",
        green: "#5DC266",
        lightGreen: "#EEF3E7",
        background: "#F0F2EC",
      },
    },
  },
  plugins: [],
} satisfies Config;
