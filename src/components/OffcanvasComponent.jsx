// OffcanvasComponent.jsx
import React from "react";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import Offcanvas from "react-bootstrap/Offcanvas";
import logo from "../Assets/Logo_GNTV.png";

function OffcanvasComponent({ show, onHide }) {
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
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link as={Link} to="#">
              Demo
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link href="#" rel="noreferrer">
              Featured
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link href="#" rel="noreferrer">
              Interocitor™
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link href="#" rel="noreferrer">
              Beta
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Offcanvas.Body>
    </Offcanvas>
  );
}

export default OffcanvasComponent;