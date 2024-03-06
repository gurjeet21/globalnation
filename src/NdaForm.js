import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const NdaForm = () => {
  return (
    <section>
      <Container fluid className="nda-section d-flex justify-content-center align-items-center">
        <Container fluid>
          <Row className="d-flex justify-content-center align-items-center min-vh-100">
            <Col md={8}>
              <div className="embed-responsive embed-responsive-16by9">
                <h4 className="text-white text-center mb-4">This Form is in a frame. You may have to scroll within the frame to get to the bottom Submit button.</h4>
                <iframe
                  title="NDA Form"
                  width="100%"
                  height="100%"
                  id="contactform123_nda"
                  src="https://form.123formbuilder.com/my-contact-form-6601185.html?customVars123=yes&hasEmbedFormStyle=1"
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

export default NdaForm;