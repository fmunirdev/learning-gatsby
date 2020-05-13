import React from "react"
import { Link } from "gatsby"

import { Navbar, Nav } from "react-bootstrap"

export default () => (
  <header>
    <Navbar bg="light" expand="lg">
      <Navbar.Brand>Learning Gatsby</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">
            <span className="text-dark">Home</span>
          </Nav.Link>
          <Nav.Link as={Link} to="/about/">
            <span className="text-dark">About</span>
          </Nav.Link>
          <Nav.Link as={Link} to="/contact/">
            <span className="text-dark">Contact</span>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </header>
)
