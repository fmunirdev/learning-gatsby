import React from "react"
import { graphql } from "gatsby"
import { Container } from "react-bootstrap"

import Header from "../components/Header"
import Footer from "../components/Footer"

export default props => {
  const post = props.data.wordpressPost
  return (
    <>
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
    wordpressPost(slug: { eq: $slug }) {
      title
      content
      date
    }
  }
`
