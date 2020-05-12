import React from "react"
import { graphql } from "gatsby"
import { Container } from "react-bootstrap"

import Header from "../components/Header"
import Footer from "../components/Footer"
import SEO from "../components/SEO"

export default props => {
  const post = props.data.markdownRemark
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
        <h1>{post.frontmatter.title}</h1>
        <h5 className="text-muted">{post.frontmatter.subtitle}</h5>
        <p>
          Created: {post.frontmatter.date} <br />
          Keywords: {post.frontmatter.keywords}
        </p>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
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
