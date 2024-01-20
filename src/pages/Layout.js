import { Outlet } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import NavbarBrand from "react-bootstrap/NavbarBrand";

function Layout({isLoggedIn, isAdmin}) {
  return (
    <>
      <Navbar expand="lg" variant="dark" data-bs-theme="dark" className="bg-body-tertiary">
        <Container>
          <NavbarBrand>Human Needs Tool</NavbarBrand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <span style={{ visibility: isLoggedIn ? "visible" : "hidden" }}>
                <Nav.Link href="/tools">Choose tool</Nav.Link>
              </span>
              <span style={{ visibility: isAdmin ? "visible" : "hidden" }}>
                <NavDropdown title="Admin" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/admin/register">Register</NavDropdown.Item>
                  <NavDropdown.Item href="/admin/manage-users">Manage users</NavDropdown.Item>
                </NavDropdown>
              </span>
            </Nav>
            <Nav>
              <span style={{ visibility: isLoggedIn ? "hidden" : "visible" }}>
                <Nav.Link href="/login">Login</Nav.Link>
              </span>
              <span style={{ visibility: isLoggedIn ? "visible" : "hidden" }}>
                <Nav.Link href="/logout">Logout</Nav.Link>
              </span>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Outlet />
    </>
  )
};

export default Layout;
