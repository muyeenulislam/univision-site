/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#038175",
      },
      screens: {
        "3xl": "1600px",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".text-header": {
          fontSize: "1.875rem", // 30px
          fontWeight: "800",
          "@screen md": {
            fontSize: "2.125rem", // 34px
          },
        },
        ".text-sub-header": {
          fontSize: "1.375rem", // 22px
          fontWeight: "400",
          "@screen md": {
            fontSize: "1.5rem", // 24px
          },
        },
        ".points-header": {
          fontSize: "1.625rem", // 26px
          fontWeight: "800",
          "@screen md": {
            fontSize: "1.875rem", // 30px
          },
        },
        ".points-sub-header": {
          fontSize: "1.25rem", // 20px
          fontWeight: "300",
          "@screen md": {
            fontSize: "1.375rem", // 22px
          },
        },
        ".signup-guide-header": {
          fontSize: "2rem", // 32px
          fontWeight: "700",
          "@screen lg": {
            fontSize: "2.375rem", // 38px
          },
          "@screen xl": {
            fontSize: "2.75rem", // 44px
          },
        },
        ".signup-step-header": {
          fontSize: "1.25rem", // 20px
          fontWeight: "600",
          "@screen md": {
            fontSize: "2rem", // 32px
          },
        },
      };

      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
