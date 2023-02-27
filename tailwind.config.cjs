const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {
      colors: {
        
      }
    },
  },

  plugins: [
    require('@tailwindcss/typography'),
  ],
};

module.exports = config;
