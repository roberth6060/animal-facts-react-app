import { Fragment } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Outlet, Link } from "react-router-dom";

const NavSectiom = () => (
  <Fragment>
    <Navbar bg="warning" variant="light">
      <Container>
        <Navbar.Brand>
          <img
            src="https://cdn-icons-png.flaticon.com/512/3397/3397536.png"
            width="50px"
            alt="logo"
          />
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/about">
            About
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
    <Outlet />
  </Fragment>
);
export default NavSectiom;
