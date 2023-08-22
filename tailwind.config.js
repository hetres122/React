/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      height: {
        100: "33rem",
        105: "38rem",
        110: "70rem",
      },
      width: {
        950: "11",
        1200: "1200px",
        500: "500px",
        100: "70rem",
        110: "95rem",
        50: "35rem",
        sm: "540px",
        md: "668px",
        lg: "1080px",
        xl: "1200px",
      },

      letterSpacing: {
        "-0.5": "-0.5px",
      },

      colors: {
        primary: {
          100: "#ffebe2",
          200: "#a77668",
          300: "#86efac",
          400: "#4ade80",
          500: "#bf8168",
          600: "#93573f",
          700: "#6f2729",
          800: "#166534",
          900: "#14532d",
        },
        gradient: {
          300: "#ff5722",
          700: "#ff9800",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      fontSize: {
        base: "16px",
      },
      lineHeight: {
        base: "24px",
      },
      fontWeight: {
        normal: 400,
      },
    },
  },
  corePlugins: {
    container: false,
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("flowbite/plugin"),
    function ({ addComponents }) {
      addComponents({
        ".container": {
          maxWidth: "100%",
          "@screen sm": {
            maxWidth: "640px",
          },
          "@screen md": {
            maxWidth: "768px",
          },
          "@screen lg": {
            maxWidth: "1180px",
          },
          "@screen xl": {
            maxWidth: "1400px",
          },
        },
      });
    },
  ],
};
