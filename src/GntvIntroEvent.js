import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const GntvIntroEvent = () => {
    return (
        <section>
          <Container fluid className="home-section" id="home">
            <Container fluid className="home-content">
              <Row>
                <Col md={7} className="GntvIntroEvent-main">
                  <h2 className="title">
                    GNTV Intro Event
                  </h2>
                </Col>
              </Row>
            </Container>
          </Container>
        </section>
    );
};

export default GntvIntroEvent;
