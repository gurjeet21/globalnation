import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
const InterocitorDevice = () => {
    return (
        <section>
          <Container fluid className="interoritor-section">
              <Row className="interoritor-content min-h-100">
                <Col md={4} className="interoritor-header">
                  <h2 className="title">
                  The Interocitor™ device
                  </h2>
                  <p>Use our Interocitor™ device (toolkit) to create unique experiences called “Shows”, that consist of assets from our toolkit library, or uploads from your own portfolio.</p>
                  <p>Assets can be animated with a number of modifiers and even respond to user actions to create interative shows.</p>
                  <p>Be one of the first creators to learn how to master our unique and powerful Interocitor™ device!</p>
                  <Link to="/beta" className="join-btn">Join the Beta</Link>
                </Col>
              </Row>
          </Container>
        </section>
    );
};

export default InterocitorDevice;