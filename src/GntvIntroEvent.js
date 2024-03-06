import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const GntvIntroEvent = () => {
    return (
        <section>
            <Container fluid className="gntvintroevent-section landing-page-bg">
                    <Row className="d-flex justify-content-center align-items-center">
                        <Col md={10}>
                            <div className="embed-responsive embed-responsive-16by9 video-section">
                                <div className="title">GNTV Intro Event</div>
                                    <div className="iframe-wrapper">
                                        <iframe
                                            className="elementor-video-iframe"
                                            allowFullScreen
                                            title="vimeo Video Player"
                                            src="https://player.vimeo.com/video/901935849?color&amp;autopause=0&amp;loop=0&amp;muted=0&amp;title=1&amp;portrait=1&amp;byline=1#t="
                                        ></iframe>
                                    </div>
                                <div className="video-description">
                                At The Roxy Theater in Hollywood, Los Angeles, our CEO Todd Rundgren introduced GlobalNation™ to a small invited audience. This is a recording of the live stream.
                                </div>
                            </div>
                        </Col>
                    </Row>
            </Container>
        </section>
    );
};

export default GntvIntroEvent;