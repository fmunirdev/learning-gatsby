import React from "react"
import { graphql } from "gatsby"
import { Container } from "react-bootstrap"

import Header from "../components/Header"
import Footer from "../components/Footer"
import SEO from "../components/SEO"

export default props => {
  const post = props.data.wordpressPost
  return (
    <>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.subtitle}
        image={post.frontmatter.thumbnail}
        keywords={post.frontmatter.keywords}
      />
      <Header />
      <Container className="pt-3">
        <h1 dangerouslySetInnerHTML={{ __html: post.title }} />
        <p>Published: {post.date.substring(0,10)}</p>
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </Container>
      <Footer />
    </>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        subtitle
        date
        keywords
        thumbnail
      }
    }
  }
`
