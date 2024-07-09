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
          fontSize: "30px",
          fontWeight: "800",
          "@screen md": {
            fontSize: "34px",
          },
        },
        ".text-sub-header": {
          fontSize: "22px",
          fontWeight: "400",
          "@screen md": {
            fontSize: "24px",
          },
        },
        ".points-header": {
          fontSize: "26px",
          fontWeight: "800",
          "@screen md": {
            fontSize: "30px",
          },
        },
        ".points-sub-header": {
          fontSize: "20px",
          fontWeight: "300",
          "@screen md": {
            fontSize: "22px",
          },
        },
        ".signup-guide-header": {
          fontSize: "32px",
          fontWeight: "700",
          "@screen lg": {
            fontSize: "38px",
          },
          "@screen xl": {
            fontSize: "44px",
          },
        },
        ".signup-step-header": {
          fontSize: "20px",
          fontWeight: "600",
          "@screen md": {
            fontSize: "32px",
          },
        },
      };

      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
