import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function CreateUniqueExperience() {
  return (
    <Container fluid className='experience-main'>
      <Row className='justify-content-center align-items-center'>
        <Col sm={8}>sm=8</Col>
        <Col sm={4}>sm=4</Col>
      </Row>
    </Container>
  );
}

export default CreateUniqueExperience;