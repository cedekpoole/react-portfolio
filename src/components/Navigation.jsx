import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {setState} from "react"

function Navigation () {
    return (
        <Navbar id="mainNavbar" expand="lg" className="pb-0 fixed-top m-1">
          <Navbar.Brand href="#home">Cameron Edek Poole</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">HOME</Nav.Link>
              <Nav.Link href="#projects">PROJECTS</Nav.Link>
              <Nav.Link href="#about">ABOUT</Nav.Link>
              <Nav.Link href="#contact">CONTACT</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
    )
}

export default Navigation