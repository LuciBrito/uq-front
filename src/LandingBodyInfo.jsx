import slider from './img/img-slider.jpg';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LandingCarousel from './LandingCarousel';
import { LandingBodyCards } from './LandingBodyCards';

export default function LandingBodyInfo() {
  return (
    <Container className='landing-container align-items-center py-4 py-lg-5 media-aux'>
        <Row >
          <Col>
             <h1 className='info-text-h1 pb-4'> ¿QUE HACEMOS? </h1>
            <LandingCarousel></LandingCarousel>
            <LandingBodyCards></LandingBodyCards>

          </Col>
          <Col>
            <h2 className='info-text-h2'>Representando a la industria de Quilmes desde 1971</h2>
            <p className='info-text-p'>
              La Unión Industrial de Quilmes es una de las entidades industriales más importante y reconocida de la región. Una de las características principales que nos identifican es la proactividad, el estar constantemente pendientes de las problemáticas que nos plantean nuestros asociados, asistiendo sus necesidades y brindándoles un servicio de calidad.
            </p>


            <div className="container-text-links">
                <a className="btn btn-title " href="#">Conocé nuestros servicios</a>
                <a className="btn btn-title " href="#">Asociate</a>
            </div>
          </Col>
        </Row>
    </Container>
  )
}


/* 
   <div className='container-body-info'>
        <div className='info-slider'>
            <h1>slider</h1>
            <div className='slider-img'>    
                <img src={slider} alt="" />
            </div>
        </div>
        <div className='info-text'>
            <h1 className='info-text-h1'> ¿QUE HACEMOS? </h1>
            <h3 className='info-text-h3'>La Unión Industrial de Quilmes es una de las entidades industriales más importante y reconocida de la región. Una de las características principales que nos identifican es la proactividad, el estar constantemente pendientes de las problemáticas que nos plantean nuestros asociados, asistiendo sus necesidades y brindándoles un servicio de calidad.</h3>
        </div>
    </div>
*/