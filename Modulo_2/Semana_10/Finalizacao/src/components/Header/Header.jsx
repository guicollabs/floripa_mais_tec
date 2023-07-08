import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from './../../assets/img/logo.png';

function Header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand to="/" as={NavLink}>
          <img src={logo} alt="Cupcake Shop" width={100} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className="justify-content-end">
          <Nav>
            <Nav.Link to="/" as={NavLink}>
              <span>🔸</span>Home
            </Nav.Link>
            <Nav.Link to="/produtos" as={NavLink}>
              <span>🔸</span>Produtos
            </Nav.Link>
            <Nav.Link to="/faq" as={NavLink}>
              <span>🔸</span>FAQ
            </Nav.Link>
            <Nav.Link to="/contato" as={NavLink}>
              <span>🔸</span>Contato
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
