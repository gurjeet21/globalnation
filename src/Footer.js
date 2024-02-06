import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";

function Footer() {
  let date = new Date();

  const quickLinks = [
    { label: 'Home', url: '/' },
    { label: 'Demo', url: '/demo' },
    { label: 'Featured', url: '/featured' },
    { label: 'Interocitor™', url: '/interocitor' },
    { label: 'Beta', url: '/beta' },
  ];

  return (
    <Container fluid className="footer">
      <ScrollToTop />
      <Row>
        <Col md="8" className="footer-left-sec text-left">
          <h2 className="heading-title">
            <Link to="/">Global<span>Nation™</span></Link>
          </h2>
          <p>
            If you would like to know more about our mission or want to be an active part
            of our development team, please contact us to find out more:
          </p>
          <p>
            <a className="email" href="mailto:info@globalnation.tv">
              info@globalnation.tv
            </a>
          </p>
        </Col>
        <Col md="4" className="footer-right-sec">
          <div className="quick-links">
            <h2>Quick Links</h2>
            <ul>
              {quickLinks.map((link, index) => (
                <li key={index}>
                  {/* Provide the 'to' prop for the Link component */}
                  <Link to={link.url}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </Col>
      </Row>
      <Row>
        <Col md="4" className="footer-copywright">
          <p>© {date.getFullYear()} GlobalNation™</p>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;