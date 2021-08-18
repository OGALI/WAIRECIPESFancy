/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "Wai Recipes",
    shortTitle: "Recipes",
    description: "Original recipes you’ll want to keep making.", 
    url: "https://recipes-demo.marinda.me", // No trailing slash allowed!
    image: "/images/og-image.jpg", // Path to your image you placed in the 'static' folder
    author: "",
    intro: "Classic recipes you’ll want to keep making. Check out our IG page <a href="https://www.instagram.com/wairecipes/" target="_blank"  rel="noreferrer noopener">@wairecipes</a> if you like what you see here (❁´◡`❁).",
    menuLinks: [
      {
        name: "About",
        slug: "/about/"
      }
    ],
  },
  plugins: [
    {
      resolve: "@marinda/gatsby-theme-recipes",
      options: {
        title: "Classic Recipes",
        shortTitle: "Recipes"
      }
    }
  ]
};
