import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const InterocitorDevice = () => {
    return (
        <section>
            <Container fluid className="featured-artist-section landing-page-bg">
                <Container fluid className="home-content">
                    <Row className="d-flex justify-content-center align-items-center">
                        <Col md={5}>
                            {/* Assuming you have an iframe for the video */}
                            <div className="embed-responsive embed-responsive-16by9 video-section">
                                <div className="title">The Interocitor Device</div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </section>
    );
};

export default InterocitorDevice;