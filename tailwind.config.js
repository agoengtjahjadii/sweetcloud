module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        body: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: {
          DEFAULT: "#5C65FF",
        },
        body: {
          DEFAULT: "#252525",
          light: "#767676",
          white: "#FFFFFF",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
