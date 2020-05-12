/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "Gatsby Bootstrap",
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
  ],
}
