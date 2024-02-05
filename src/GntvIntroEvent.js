import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const GntvIntroEvent = () => {
    return (
        <section>
            <Container fluid className="gntvintroevent-section landing-page-bg">
                <Container fluid className="home-content">
                    <Row className="d-flex justify-content-center align-items-center">
                        <Col md={5}>
                            {/* Assuming you have an iframe for the video */}
                            <div className="embed-responsive embed-responsive-16by9 video-section">
                                <div className="title">GNTV Intro Event</div>
                                  <iframe src="https://player.vimeo.com/video/901935849?color&autopause=0&loop=0&muted=0&title=1&portrait=1&byline=1#t=" 
                                    width="100%" height="300" 
                                    allowfullscreen>
                                  </iframe>
                                <div className="video-description">
                                  At The Roxy Theater in Hollywood, Los Angeles, our CEO Todd Rundgren introduced GlobalNation™ to a small invited audience This is a recording of the live stream.
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </section>
    );
};

export default GntvIntroEvent;