import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function CreateUniqueExperience() {
  return (
    <Container fluid className='experience-container'>
      <Row className='justify-content-center align-items-center'>
        <Col sm={8}>
          <div className="iframe-wrapper">
            <iframe
                className="elementor-video-iframe"
                allowFullScreen
                title="Create Unique Experience"
                src="https://player.vimeo.com/video/903064709?color&autopause=0&loop=0&muted=0&title=0&portrait=1&byline=1#t="
            ></iframe>
          </div>
        </Col>
        <Col sm={4}>
          <div className="experience-content-section">
            <div className='title'>Create Unique Experiences</div>
            <p>With our Interocitor™, you can create experiences that you can share with other GNTV members and moderate your own content channels.</p>
            <Link to="/beta" className="join-btn">Join the Beta</Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default CreateUniqueExperience;