/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "Learning Gatsby",
    description: "Learning Gatsby, GraphQL and Markdown",
    keywords: "gatsby, graphql, bootstrap, markdown",
    image: "/static/site-image.jpg",
    url: "https://fmunirdev.github.io/learning-gatsby/",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Bootstrap`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: `static/icon.png`,
      },
    },
    `gatsby-plugin-offline`,
  ],
}
