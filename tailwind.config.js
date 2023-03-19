const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        serif: ["Merriweather", ...defaultTheme.fontFamily.serif],
        sans: ["Montserrat", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        sekai: "#E4002B",
        sekai2: "#E06287",
        ...defaultTheme.colors,
      },
    },
  },
  variants: {},
  plugins: [],
  purge: {
    enabled: true,
    content: [
      "./src/**/*.js",
      "./src/**/*.ts",
      "./src/**/*.jsx",
      "./src/**/*.tsx",
    ],
    options: {},
  },
}
