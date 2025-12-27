import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';   

import logo from './img/logo-quilmes.png';
import Instragram from './img/icons/instagram.svg';
import Warap from './img/icons/whatsapp.svg';
import Linke from './img/icons/linkedin.svg';


export default function LandingFooter() {
  return (
    <footer className='p-4 '>
        <Container>
         
            <Row>
                <Col className="text-center py-3 d-flex flex-column align-items-center">
                    <div>
                        <img src={logo} alt="Logo Quilmes" className="img-fluid" style={{ width: '100px' }}/>
                    </div> 
                    <div>
                        <span>Union Industrial de Quilmes</span>
                        <p>Represntando la capolidad</p>
                    </div> 
                    
                </Col>  
                <Col className="text-center py-3 ">
                    <ul className='list-unstyled'>
                        <li>Inicio</li>
                        <li>Quienes somos</li>
                        <li>Servicios</li>
                        <li>Capacitacion</li>
                        <li>Asociate</li>
                    </ul>
                </Col>  
                <Col className="text-center py-3">
                    <ul className='list-unstyled '>
                        <li>Contact</li>
                        <li>info@mail</li>
                        <li>54 11 301030313</li>
                        <li>quilmes, buenos aires</li>
                    </ul>
                </Col>  

            </Row>

        </Container>

        <Container>
            <Row>
                <Col className="text-center py-3">
                    <span>© 2026 Copyright Union Industrial de Quilmes  </span>
                   
                </Col>
                <Col className="text-center py-3">
                    <a className="text-decoration-none" href="#"><img src={Instragram} alt="Instagram" style={{width:'25px'}} /></a>
                    <a className="text-decoration-none" href="#"> <img src={Warap} alt="Whatsapp" style={{width:'25px'}} /></a>
                    <a className="text-decoration-none" href="#"> <img src={Linke} alt="LinkedIn" style={{width:'25px'}} /></a>
                </Col>
            </Row>
        </Container>
    </footer>
  )
}
/*
   <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                © 2024 Copyright:
                <a className="text-dark" href="https://uiquilmes.org/"> UQquilmes.org</a>
            </div>

*/