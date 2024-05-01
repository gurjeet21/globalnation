// OffcanvasComponent.jsx
import React, { useState } from "react";
import Nav from "react-bootstrap/Nav";
import Offcanvas from "react-bootstrap/Offcanvas";
import logo from "./Assets/Logo_GNTV.png";
import { NavLink } from "react-router-dom";

function OffcanvasComponent({ show, onHide }) {
  const [navColour, updateNavbar] = useState(false);
  return (
    <Offcanvas show={show} onHide={onHide} placement="end">
      <Offcanvas.Header closeButton>
        <img src={logo} className="img-fluid logo" alt="brand" />
      </Offcanvas.Header>

      <hr />
      <Offcanvas.Body>
        <Offcanvas.Title>
          <h1>Our Menu</h1>
        </Offcanvas.Title>
        <Nav defaultActiveKey="#home">
          <Nav.Item>
            <Nav.Link as={NavLink} to="/">
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
            <Nav.Link as={NavLink} to="/downloads">
              Downloads
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link href="https://wiki.globalnation.tv" target="_blank">
              Knowledge Base
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link as={NavLink} to="/terms-of-service">
             Terms of Service
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link as={NavLink} to="/privacy-policy">
             Privacy Policy
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Offcanvas.Body>
    </Offcanvas>
  );
}

export default OffcanvasComponent;