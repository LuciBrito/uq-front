import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

import asociarte from './img/asociarte.png';
import servicios from './img/servicios.png';
import departamentos from './img/departamentos.png';
import novedades from './img/novedades.png';



export default function LandingBodyC() {
  return (
    <Container className=" landing-container d-flex flex-wrap justify-content-center gap-4 px-8 py-4 py-lg-5  ">
        <a className="text-decoration-none" href="">
            <Card className=" card-info " style={{ width:'100%', maxWidth: '25rem' }}>
                <Card.Img variant="top" src={servicios}/>
                <Card.Body>
                    <Card.Title >
                        <h3 className='info-text-p text-center'>
                            Servicios
                        </h3>
                    </Card.Title>
                    <Card.Text className='text-center'>
                        Conoce mas sobre todos los servicios que ofrecemos.
                    </Card.Text>
                </Card.Body>
            </Card>
        </a>
        <a className="text-decoration-none" href="">
            <Card className=" card-info " style={{  width:'100%', maxWidth: '25rem' }}>
                <Card.Img variant="top" src={departamentos}/>
                <Card.Body>
                    <Card.Title>
                        <h3 className='info-text-p text-center'>
                            Departamentos
                        </h3>   
                    </Card.Title>
                    <Card.Text className='text-center'>
                        Descubri los distintos departamentos que conforman nuestra organización.
                    </Card.Text>
                </Card.Body>
            </Card>
        </a>
        <a className="text-decoration-none" href="">
            <Card className=" card-info " style={{  width:'100%', maxWidth: '25rem' }}>
                <Card.Img variant="top" src={novedades}/>
                <Card.Body>
                    <Card.Title>
                        <h3 className='info-text-p text-center'>
                        Novedades 
                        </h3>
                    </Card.Title>
                    <Card.Text className='text-center'>
                        Mantenete al día con las últimas novedades y eventos.
                    </Card.Text>
                </Card.Body>
            </Card>
        </a>
        <a className="text-decoration-none" href="">
            <Card className=" card-info " style={{  width:'100%', maxWidth: '25rem' }}>
                <Card.Img variant="top" src={asociarte}/>
                <Card.Body>
                    <Card.Title>
                        <h3 className='info-text-p text-center'>
                            Asociate 
                        </h3>
                    </Card.Title>
                    <Card.Text className='text-center'>
                        Descubre los beneficios de asociarte con nosotros.
                    </Card.Text>
                </Card.Body>
            </Card>
        </a>
  </Container>
  );
}
/*
    <div className="h-100 d-flex justify-content-around align-items-center flex-wrap gap-1 landing-container px-6 py-4 py-lg-5"></div> ¨*/