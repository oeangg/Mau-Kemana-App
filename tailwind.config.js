/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["var(--font-inter)"],
        inter: ["var(--font-poppins)"],
      },
      colors: {
        BgColor1: "var(--bg1)",
        BgColor2: "var(--bg2)",
        textColor1: "var(--fg1)",
        textColor2: "var(--fg2)",
        textColor3: "var(--fg3)",
      },
    },
  },
  plugins: [],
};
