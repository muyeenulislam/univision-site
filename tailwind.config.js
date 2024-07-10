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
          fontSize: "28px",
          fontWeight: "800",
          "@screen md": {
            fontSize: "30px",
          },
        },
        ".text-sub-header": {
          fontSize: "20px",
          fontWeight: "400",
          "@screen md": {
            fontSize: "20px",
          },
        },
        ".checkpoint-header": {
          fontSize: "18px",
          "@screen md": {
            fontSize: "20px",
          },
        },
        ".checkpoint-sub-header": {
          fontSize: "16px",
          "@screen md": {
            fontSize: "18px",
          },
        },
        ".points-header": {
          fontSize: "26px",
          fontWeight: "800",
          "@screen md": {
            fontSize: "28px",
          },
        },
        ".points-sub-header": {
          fontSize: "18px",
          fontWeight: "300",
          "@screen md": {
            fontSize: "20px",
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
