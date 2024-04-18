import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "./Assets/Logo_GNTV.png";
import { NavLink } from "react-router-dom";
import OffcanvasComponent from "./OffcanvasComponent";

function NavBar() {
  const [navColour, updateNavbar] = useState(false);
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <>
      <Navbar
        fixed="top"
        expand="md"
        className={navColour ? "" : "navbar"}
      >
        <Container fluid>
          <Navbar.Brand as={NavLink} to="/" className="d-flex justify-content-center">
            <img src={logo} className="img-fluid logo" alt="brand" />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            onClick={() => setShowOffcanvas(!showOffcanvas)}
          >
            <span></span>
            <span></span>
            <span></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto" defaultActiveKey="#home">
              <Nav.Item>
                <Nav.Link as={NavLink} to="/" exact>
                  Home
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link as={NavLink} to="/demo">
                  Demo
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link as={NavLink} to="/featured">
                  Featured
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link as={NavLink} to="/interocitor">
                  Interocitor™
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link as={NavLink} to="/beta">
                  Beta
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link href="https://wiki.globalnation.tv/" target="_blank" rel="noopener noreferrer">
                  Knowledge Base
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <OffcanvasComponent
        show={showOffcanvas}
        onHide={() => setShowOffcanvas(false)}
      />
    </>
  );
}

export default NavBar;