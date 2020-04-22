module.exports = {
  siteMetadata: {
    title: `Ganzensport`,
    description: `Speel thuis een sportief spel. Voor jong en oud. Voor alle soorten sporten.`,
    author: `Wes Oudshoorn`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-transformer-yaml`,
      options: {
        typeName: `PagesDataYaml`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "yaml",
        path: `${__dirname}/src/pages-data`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Barlow\:ital,wght@0,400;0,700;1,400`, // you can also specify font weights and styles
        ],
        display: "swap",
      },
    },
    `gatsby-plugin-postcss`,
  ],
}
