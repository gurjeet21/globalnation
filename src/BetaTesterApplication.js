import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const BetaTesterApplication = () => {
    return (
        <section>
            <Container fluid className="beta-artist-section landing-page-bg">
                <Container fluid>
                    <Row className="d-flex justify-content-center align-items-center">
                        <Col md={8}>
                            {/* Assuming you have an iframe for the video */}
                            <div className="embed-responsive embed-responsive-16by9">
                                <div className="title">Beta Tester Application</div>
                                <iframe
                                    title="Beta Tester Application Form"
                                    width="100%"
                                    height="100%"
                                    id="contactform123"
                                    src="https://form.123formbuilder.com/my-contact-form-6576376.html?customVars123=yes&hasEmbedFormStyle=1"
                                    frameBorder="0"  // To remove the iframe border
                                    scrolling="no"   // To disable scrolling
                                >
                                    <p>Your browser does not support iframes. The contact form cannot be displayed. Please use another contact method (phone, fax, etc).</p>
                                </iframe>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </section>
    );
};

export default BetaTesterApplication;