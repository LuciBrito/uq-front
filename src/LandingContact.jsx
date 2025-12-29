import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import img from './img/img-contact.png';

import LandingContactForm from "./LandingContactForm";
import LandingContactCard from './LandingContactCard';

export default function LandingContact() {
  return (
    <Container className='landing-container justify-content-center align-items-center text-center py-4'>
        
        <h1 className='info-text-h1'>¿Necesitas asesoramiento institucional?</h1>
        <p className='info-text-h3 text-center'>Nuestro equipo esta disponible para ayudarte</p>
        
        <Row>
            <Col>
                <img src={img} alt="Contact" className="img-fluid" />
                <LandingContactCard/>
            </Col>
            <Col>
                <LandingContactForm />
                <div className='container-text-links'>  
                  <a className="btn-title btn primary" href="#">Asociate</a>
                </div>
            </Col>

        </Row>    

    </Container>
  )
}
