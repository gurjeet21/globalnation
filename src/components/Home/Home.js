import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Services from "./Services";

function Home() {
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
              <p>GlobalNation™ is about supporting the creators whose work inspires you, and to become a creator and inspire others.</p>
              <p>Join us to Create, Connect with other creators, and Collect their work in support of them.</p>
              <a className="join-btn" href="#">Join the Beta</a>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Home;
