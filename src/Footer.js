import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom"; // Change import
import ScrollToTop from "./ScrollToTop";

function Footer() {
  let date = new Date();

  const quickLinks = [
    { label: 'Home', url: '/' },
    { label: 'Demo', url: '/demo' },
    { label: 'Featured', url: '/artist/featured' },
    { label: 'Interocitor™', url: '/interocitor' },
    { label: 'Downloads', url: '/download/downloads' },
    { label: 'Knowledge Base', url: 'https://wiki.globalnation.tv' }, // External URL
    { label: 'Terms of Service', url: '/terms-of-service' },
    { label: 'Privacy Policy', url: '/privacy-policy' },
  ];

  return (
    <Container fluid className="footer">
      <ScrollToTop />
      <Row>
        <Col md="8" className="footer-left-sec text-left">
          <h2 className="heading-title">
            <NavLink exact to="/" activeClassName="active">Global<span>Nation™</span></NavLink>
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
                  {link.url.startsWith('http') || link.url.startsWith('www') ? (
                    <a href={link.url} target="_blank" rel="noopener noreferrer">{link.label}</a>
                  ) : (
                    <NavLink exact to={link.url} activeClassName="active">{link.label}</NavLink>
                  )}
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