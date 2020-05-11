import React from "react"
import Post from "../components/Post"
import PrimaryLayout from "../layouts/PrimaryLayout"

export default () => (
  <PrimaryLayout>
    <div className="row justify-content-md">
      <div className="col-xs-6">
        <Post
          title="Introducing Gatsby"
          text="Just another JS Framework"
          img="https://i.picsum.photos/id/66/300/200.jpg"
        ></Post>
      </div>
    </div>
  </PrimaryLayout>
)
