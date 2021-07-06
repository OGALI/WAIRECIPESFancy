import theme from "@marinda/gatsby-theme-recipes/src/gatsby-plugin-theme-ui";
console.log(theme)
export default {
  ...theme,
  colors: {
    ...theme.colors,
    muted: "#F9DFC9",
    modes: {
      dark: {
        ...theme.colors.modes.dark,
        primary: "#2b2828",
        accent: "#423d3f",
        muted: "#2f2f2f",
        grey: "#363034",
        background: "#1a1517",
      }
    }
  } 
};
