// tailwind.config.js
module.exports = {
  content: ["./**/*.{html,js}"],
  safelist: [
    "w-[800px]",
    "w-[900px]",
    "left-20",
    "left-40",
    "right-20",
    "right-40",
    "right-[200px]",
    "right-[400px]",
    "right-[500px]",
    "right-[600px]",
    "right-[700px]",
    "right-[800px]",
    "left-[300px]",
  ],
  theme: {
    extend: {
      animation: {
        marquee: "marquee 40s linear infinite alternate", // mais lento
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
    },
  },
  plugins: [],
};
