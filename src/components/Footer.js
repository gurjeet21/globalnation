import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();

  const quickLinks = [
    { label: 'Home', url: '/' },
    { label: 'Demo', url: '#' },
    { label: 'Featured', url: '#' },
    { label: 'Interocitor™', url: '#' },
    { label: 'Beta', url: '#' },
  ];

  return (
    <Container fluid className="footer">
       <Row>
       <Col md="8" className="footer-left-sec text-left">
          <h2 className="heading-title">
            <a href="https://globalnation.tv/">Global<span>Nation™</span></a>
          </h2>
          <p>
            If you would like to know more about our mission or want to be an active part
            of our development team, please contact us to find out more:
          </p>
          <p><a className="email" href="mailto:info@globalnation.tv">
            info@globalnation.tv
          </a></p>
        </Col>
        <Col md="4" className="footer-right-sec">
          <div className="quick-links">
           <h2>Quick Links</h2>
            <ul>
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.url}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </Col>
      </Row>
      <Row>

        <Col md="4" className="footer-copywright">
          <p>© 2024 GlobalNation™</p>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
