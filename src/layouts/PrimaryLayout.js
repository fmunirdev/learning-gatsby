import React from "react"
import { Container } from "react-bootstrap"

import SEO from "../components/SEO"
import Header from "../components/Header"
import Footer from "../components/Footer"

export default props => (
  <>
    <SEO />
    <Header />
    <Container className="pt-3">{props.children}</Container>
    <Footer />
  </>
)
