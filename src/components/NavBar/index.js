
import React from 'react'
import { Navbar, Container,Nav } from 'react-bootstrap'
// import cover from "../../../src/assets/cover/Gourge.JPG";

const NavBar = () => {

        return(
          <Navbar bg="dark" variant="dark" className="Navbar">
            <Container>
              <Navbar.Brand href="/" style={{color:"#DA7B93"}}>Jessica Sheleg</Navbar.Brand>
            </Container>
            <Container>
              <Nav className="navbar">
                <Nav.Link href="/">About</Nav.Link>
                <Nav.Link href="/portfolio">Portfolio</Nav.Link>
                <Nav.Link href="/resume">Resume</Nav.Link>
                <Nav.Link href="/contact">Contact</Nav.Link>
              </Nav>
            </Container>
          </Navbar>
        )  
}

export default NavBar;