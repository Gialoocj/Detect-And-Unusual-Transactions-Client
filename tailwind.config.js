/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "text-gradient": "linear-gradient(to right, #FF636D, #FF816C)",
        "gradient-light-pink": "linear-gradient(45deg, #f0d4d8, #f0d4d8)",
      },
      backgroundColor: {
        gradient: "linear-gradient(to right, #FF636D, #FF816C)",
      },
      backgroundClip: {
        text: "text",
      },
      textFillColor: {
        transparent: "transparent",
      },
      animation: {
        "fall-down": "fallDown 0.5s ease-in-out",
      },
    },
    keyframes: {
      fallDown: {
        "0%": {
          opacity: "0",
          transform: "translateY(-20px)",
        },
        "100%": {
          opacity: "1",
          transform: "translateY(0)",
        },
      },
      fallDownHidden: {
        "0%": {
          opacity: "1",
          transform: "translateY(0)",
        },
        "100%": {
          opacity: "0",
          transform: "translateY(-20px)",
        },
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".text-gradient": {
          backgroundImage: "linear-gradient(to right, #FF636D, #FF816C)",
          "-webkit-background-clip": "text",
          "-webkit-text-fill-color": "transparent",
        },
      });
    },
  ],
};
