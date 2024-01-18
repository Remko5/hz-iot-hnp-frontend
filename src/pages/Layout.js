import { Outlet, Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavbarBrand } from "react-bootstrap";

const Layout = () => {
  
  return (
    <>
      <Navbar expand="lg" variant="dark" data-bs-theme="dark" className="bg-body-tertiary">
        <Container>
          <NavbarBrand>Human Needs Project</NavbarBrand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/choosetool">Choose tool</Nav.Link>
              <NavDropdown title="Admin" id="basic-nav-dropdown">
                <NavDropdown.Item href="/admin/register">Register</NavDropdown.Item>
                <NavDropdown.Item href="/admin/manage-users">Manage users</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/login">Login</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* <nav>
        <ul>
          <li>
            <Button><Link to="/" style={buttonStyle}>Home</Link></Button>
          </li>
          <li>
            <Button><Link to="/admin" style={buttonStyle}>Admin</Link></Button>
          </li>
          <li>
            <Button><Link to="/choosetool" style={buttonStyle}>Choose tool</Link></Button>
          </li>
          <li>
            <Button><Link to="/login" style={buttonStyle}>Login</Link></Button>
          </li>
        </ul>
      </nav> */}

      <Outlet />
    </>
  )
};

export default Layout;