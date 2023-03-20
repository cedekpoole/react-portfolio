import './Header.css'

// Import bootstrap components to use in navbar
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

// Import link container that allows bootstrap and react router to work together
import { LinkContainer } from 'react-router-bootstrap'

function Header () {
    return (
        <Navbar id="mainNavbar" expand="lg" className="navbar-dark pb-1 fixed-top mb-5" collapseOnSelect>
          <Navbar.Brand className="mx-3">CAMERON EDEK POOLE</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto m-1">
              <LinkContainer to="/">
              </LinkContainer>
              <LinkContainer to="/projects">
              <Nav.Link>PROJECTS</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/about">
              <Nav.Link>ABOUT</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/contact">
              <Nav.Link>CONTACT</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
    )
}

export default Header;