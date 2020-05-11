import React from "react"
import { Form, Button } from "react-bootstrap"

import PrimaryLayout from "../layouts/PrimaryLayout"

export default () => (
  <PrimaryLayout>
    <h1>Contact Us</h1>
    <Form>
      <Form.Group controlId="contactForm.email">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Email..." />
      </Form.Group>

      <Form.Group controlId="contactForm.subject">
        <Form.Label>Subject</Form.Label>
        <Form.Control type="text" placeholder="Subject" />
      </Form.Group>

      <Form.Group controlId="contactForm.message">
        <Form.Label>Example textarea</Form.Label>
        <Form.Control as="textarea" rows="3" />
      </Form.Group>

      <Form.Group controlId="contactForm.submit">
        <Button>Submit</Button>
      </Form.Group>
    </Form>
  </PrimaryLayout>
)
