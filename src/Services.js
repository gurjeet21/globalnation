import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ServiceCreate from './Assets/Svg/ServiceCreate';
import ServiceCollect from './Assets/Svg/ServiceCollect';
import ServiceConnect from './Assets/Svg/ServiceConnect';

function Services() {
  return (
    <Container fluid className='services-main'>
      <Row className='justify-content-center align-items-center'>
        <Col className='text-center'>
            <div className='service-icon'>
                <ServiceCreate/>
            </div>
            <div className='service-content'>
                <div className='title'> Create </div>
                <div className='sub-title'> with our Interocitor™ </div>
                <p>Whether you’ve toured the planet or never left your bedroom, in our world everyone is a potential creator. Use our free tools to explore the possibilities.</p>
            </div>
        </Col>
        <Col className='text-center'>
            <div className='service-icon'>
                <ServiceConnect/>
            </div>
            <div className='service-content'>
                <div className='title'> Connect </div>
                <div className='sub-title'> with other Creators </div>
                <p>Social media can be chaotic. You have control over your space and who can enter it, without sacrificing the tools that allow you to interact with your audience.</p>
            </div>
        </Col>
        <Col className='text-center'>
            <div className='service-icon'>
                <ServiceCollect/>
            </div>
            <div className='service-content'>
                <div className='title'> Collect </div>
                <div className='sub-title'> other Creators’ experiences </div>
                <p>GlobalNation™ is about creators, big and small, supporting each other. No popup ads or commercials, only the direct sponsorship of other members.</p>
            </div>
        </Col>
        
        
      </Row>
    </Container>
  );
}

export default Services;