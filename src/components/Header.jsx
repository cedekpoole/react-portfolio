import './Header.css'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Outlet} from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'

function Header () {
    return (
        <Navbar id="mainNavbar" expand="lg" className="navbar-dark pb-1 fixed-top">
          <Navbar.Brand>CAMERON EDEK POOLE</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <LinkContainer to="/">
                <Nav.Link>HOME</Nav.Link>
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
          <Outlet />
        </Navbar>
    )
}

export default Header;