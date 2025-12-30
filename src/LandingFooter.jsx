import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';   

import logo from './img/logo-quilmes.png';
import Instragram from './img/icons/instragram-icon.svg';
import Whatsapp from './img/icons/whatsapp-icon.svg';
import Linkedin from './img/icons/linkedin-icon.svg';
import Ubicacion from './img/icons/location-icon.svg';
import Telefono from './img/icons/phone-icon.svg';
import Mensaje from './img/icons/message-icon.svg';


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
                        <span className="info-text-p">Union Industrial de Quilmes</span>
                        <p className="info-text-p">Representando la industiral nacional</p>
                    </div> 
                    
                </Col>  
                <Col className="text-center py-3 ">
                    <ul className='list-unstyled'>
                        <li className='info-text-p pb-2'>Inicio</li>
                        <li className='info-text-p pb-2'>Quienes somos</li>
                        <li className='info-text-p pb-2'>Servicios</li>
                        <li className='info-text-p pb-2'>Capacitacion</li>
                        <li className='info-text-p pb-2'>Asociate</li>
                    </ul>
                </Col>  
                <Col className="text-center py-3 text-start">
                    <ul className='list-unstyled '>
                        <li className='info-text-p pb-2 text-start'> <img src={Mensaje} className="icon-color" alt="Email" style={{ width: '20px', marginRight: '10px' }} />uiquilmes.adm@gmail.com</li>
                        <li className='info-text-p pb-2 text-start'><img src={Telefono} alt="Telefono" style={{ width: '20px', marginRight: '10px' }} />Telefono: 11 7522-7496</li>
                        <li className='info-text-p pb-2 text-start'><img src={Ubicacion} alt="Ubicacion" style={{ width: '20px', marginRight: '10px' }} />Direccion: Alvear 867, B1878 Quilmes</li>
                    </ul>
                </Col>  

            </Row>

        </Container>

        <Container>
            <Row>
                <Col className="text-center py-3">
                    <span className='info-text-p'>© 2026 Copyright Union Industrial de Quilmes  </span>
                   
                </Col>
                <Col className="text-center py-3">
                    <a className="text-decoration-none" href="#"><img src={Instragram} alt="Instagram" style={{width:'25px'}} /></a>
                    <a className="text-decoration-none" href="#"> <img src={Whatsapp} alt="Whatsapp" style={{width:'25px'}} /></a>
                    <a className="text-decoration-none" href="#"> <img src={Linkedin} alt="LinkedIn" style={{width:'25px'}} /></a>
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