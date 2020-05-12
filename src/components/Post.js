import React from "react"
import { Card, Button } from "react-bootstrap"

export default props => (
  <Card className="my-3">
    <Card.Img variant="top" src={props.img} />
    <Card.Body>
      <Card.Title dangerouslySetInnerHTML={{ __html: props.title }} />
      <Card.Text dangerouslySetInnerHTML={{ __html: props.subtitle }} />
      <Button variant="primary" href={props.readMore}>
        Read More
      </Button>
    </Card.Body>
  </Card>
)
