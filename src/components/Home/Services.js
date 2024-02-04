import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Svgcomponenets from '../Svgcomponents';

function Services() {
    return (
        <Container className="p-5">
          <Row>
            <Col></Col>
            <Col>2 of 3</Col>
            <Col>3 of 3</Col>
          </Row>
          <Svgcomponenets/>
        </Container>
      );
}

export default Services;
