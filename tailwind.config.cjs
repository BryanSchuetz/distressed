const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      colors: {
        purp: "#AD94F0",
        peach: "#DD9985",
        pink: "#D886BA",
        orange: "#EBCA8E",
        yellow: "#FFFE97",
        green: "#C1FB95",
        blue: "#BFFCEA"
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};

module.exports = config;
