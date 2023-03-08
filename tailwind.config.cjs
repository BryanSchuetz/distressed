const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      colors: {
        Dpurp: "#AD94F0",
        Dpeach: "#DD9985",
        Dpink: "#D886BA",
        Dorange: "#EBCA8E",
        Dyellow: "#FFFE97",
        Dgreen: "#C1FB95",
        Dblue: "#BFFCEA"
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};

module.exports = config;
