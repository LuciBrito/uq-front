import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import img from './img/img-contact.png';

import LandingContactForm from "./LandingContactForm";
import LandingContactCard from './LandingContactCard';

export default function LandingContact() {
  return (
    <Container className='landing-container justify-content-center align-items-center text-center'>
        
        <h1>¿Necesitas asesoramiento institucional?</h1>
        <p>Nuestro equipo esta disponible</p>
        
        <Row>
            <Col>
                <img src={img} alt="Contact" className="img-fluid" />
                <LandingContactCard/>
            </Col>
            <Col>
                <LandingContactForm />
                <button className="btn-title btn primary" href="#">Asociate</button>
            </Col>

        </Row>    

    </Container>
  )
}
