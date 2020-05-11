import React from "react"
import { Card, Button } from "react-bootstrap"

export default props => (
  <Card className="mx-1">
    <Card.Img variant="top" src={props.img} />
    <Card.Body>
      <Card.Title>{props.title}</Card.Title>
      <Card.Text>{props.subtitle}</Card.Text>
      <Button variant="primary" href={props.readMore}>Read More</Button>
    </Card.Body>
  </Card>
)
