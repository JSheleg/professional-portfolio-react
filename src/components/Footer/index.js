/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from 'react';
import { Navbar, Container,Nav } from 'react-bootstrap'


const Footer = () => {
  return (
    <Navbar bg="dark" variant="dark" className="Footer">
      <Container>
        <Nav className="footer">
          <Nav.Link href="https://github.com/JSheleg" target="_blank" rel="noreferrer">GitHub</Nav.Link>
          <Nav.Link href="https://www.linkedin.com/in/jessicasheleg/" target="_blank" rel="noreferrer">LinkedIn</Nav.Link>
          <Nav.Link href="#" target="_blank" rel="noreferrer">TBD</Nav.Link>
        </Nav>
      </Container>
    </Navbar>      
  )
}

export default Footer;



