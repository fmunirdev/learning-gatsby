import React from "react"
import { graphql } from "gatsby"

import Post from "../components/Post"
import PrimaryLayout from "../layouts/PrimaryLayout"

export default props => (
  <PrimaryLayout>
    <div className="row justify-content-md">
      {props.data.allWordpressPost.nodes.map(node => (
        <div className="col-4">
          <Post
            title={node.title}
            subtitle={node.excerpt}
            img={node.featured_media?.source_url ?? "https://picsum.photos/300/150/"}
            readMore={node.slug}
          ></Post>
        </div>
      ))}
    </div>
  </PrimaryLayout>
)

export const query = graphql`
  {
    allWordpressPost {
      nodes {
        title
        slug
        excerpt
        featured_media {
          source_url
        }
      }
    }
  }
`
