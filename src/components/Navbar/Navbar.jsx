import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand>
          <img src="" alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="./">
              <Nav.Link>Home</Nav.Link>
              {""}
            </Link>
            <Link to="./">
              <Nav.Link>Contacto</Nav.Link>
              {""}
            </Link>
            <NavDropdown title="Articulos para..." id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Hombres</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Mujeres</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Niños</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <CartWidget />
      </Container>
    </Navbar>
  );
}

export default NavBar;
