import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';




export default function LandingBody() {
  return (
    <Container  className="landing-container d-flex align-items-center  media-aux nav-aux">
      <Row className="landing-row">
        <Col>
          <h1>Impulsando la Industria Local</h1>
          <h3>+50 años representando a las empresas quilmeñas</h3>

          <div className="container-text-links">
            <Link className="btn-title btn" to="/servicios">Conocé nuestros servicios</Link>
            <Link className="btn-title btn primary" to="/asociate">Asociate</Link>
          </div>
        </Col>
        <Col className='aux-none'>
      
        </Col>

      </Row>
    </Container>
  )
}

// File: src/LandingBodyTitle.jsx 
/*
 <div className="container-img-title">
            <img src={fondo} alt="Fondo de la landing" />
        </div>{}
}

------

    <div className="container-title">
       
        
        <div className="container-text-title">
            <h1>
                Impulsando la Industria Local
            </h1>
            <h3>
                +50 años representando a las empresas quilmeñas
            </h3>
            
            <div className='container-text-links'>
                <a  div='btn-title btn' href="#" >Conoce nuestros servicios</a>
                <a  div='btn-title btn' href="#" >Asociate</a>
            </div>

        </div>        
          
    </div>


*/