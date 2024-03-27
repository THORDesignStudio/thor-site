/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: "#222",
      white: "#fff",
      gray: "#D8D8D8",
      "gray-light": "#EEEEEE",
      red: "#FF003B",
      "midnight-blue": "#002947",
    },
    fontFamily: {
      "proxima-nova": "'proxima-nova', 'Helvetica', 'Arial', sans-serif",
    },
    extend: {
      maxWidth: {
        "8xl": "88rem",
        "9xl": "96rem",
        "10xl": "104rem",
      },
      zIndex: {
        60: "60",
        70: "70",
        80: "80",
        90: "90",
        100: "100",
      },
    },
  },
};
