import React from "react"
import { graphql } from "gatsby"

import Post from "../components/Post"
import PrimaryLayout from "../layouts/PrimaryLayout"

export default props => (
  <PrimaryLayout>
    <div className="row justify-content-md">
      {props.data.allMarkdownRemark.nodes.map(node => (
        <div className="col-xs-6">
          <Post
            title={node.frontmatter.title}
            subtitle={node.frontmatter.subtitle}
            img={node.frontmatter.thumbnail}
            readMore={node.fields.slug}
          ></Post>
        </div>
      ))}
    </div>
  </PrimaryLayout>
)

export const query = graphql`
  {
    allMarkdownRemark {
      nodes {
        frontmatter {
          title
          subtitle
          date
          keywords
          thumbnail
        }
        fields {
          slug
        }
        excerpt
        html
      }
    }
  }
`
