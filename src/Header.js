import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <section>
          <Container fluid className="home-section" id="home">
            <Container fluid className="home-content">
              <Row>
                <Col md={7} className="home-header">
                  <h2 className="title">
                    Join our Community
                  </h2>
                  <p>Our community of creators is awaiting you!</p>
                  <p>GlobalNation™  is the reincarnation of Todd Rundgren’s Creators Community PatroNet, which he launched in 1999 to offer artists like himself a direct revenue stream from supporters, or patrons, within the PatroNet community.</p>
                  <p>GlobalNation™ is about supporting the creators whose work inspires you, and becoming a creator and inspiring others.</p>
                  <p>Join us to Create, Connect with other creators, and Collect their work in support of them.</p>
               
                  <Link to="/beta" className="join-btn">Join the Beta</Link>
                </Col>
              </Row>
            </Container>
          </Container>
        </section>
    );
};

export default Header;
