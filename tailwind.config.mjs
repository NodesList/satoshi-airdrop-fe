/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",

        'memo-bg': {DEFAULT: "#000614"},
        'memo-light-blue': {DEFAULT: "#006ABC"},
        'memo-blue': {DEFAULT: "#001D64"},
        'memo-blue-2': {DEFAULT: "#003083"},
        'memo-text': {DEFAULT: "#929292"},
        'memo-color': {DEFAULT: "#0098F1"},
        'memo-color-2': {DEFAULT: "#5CF100"},
        'memo-46': {DEFAULT: "#464646"},
      },
    },
  },
  plugins: [],
};
