import Link from 'next/link';
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';

const NavBar = () => {
  return (
    <Navbar
      bg="dark"
      variant="dark"
      sticky="top"
      expand="sm"
      collapseOnSelect
    >
      <Container>
        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar">
          <Nav>
            <Nav.Link as={Link} href="/"> Personas </Nav.Link>
            <Nav.Link as={Link} href="/search"> Buscar Persona </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
