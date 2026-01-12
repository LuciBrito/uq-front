import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

import asociarte from './img/img-asociarte.png';
import servicios from './img/img-servicios.png';
import departamentos from './img/img-departamentos.png';
import novedades from './img/img-novedades.png';
import { Link } from 'react-router-dom';



export default function LandingBodyC() {
  return (
    <Container className=" landing-container d-flex flex-wrap justify-content-center gap-4 px-8 py-4 py-lg-5   ">
        <div className='cards-container'>    
            <Link className="text-decoration-none" to="/servicios">
                <Card className=" card-info shadow-lg  " >
                    <Card.Img variant="top" className='img-info-card' src={servicios}/>
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
            </Link>
            <Link className="text-decoration-none" to="">
                <Card className=" card-info shadow-lg " >
                    <Card.Img variant="top" className='img-info-card' src={departamentos}/>
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
            </Link>
            <Link className="text-decoration-none" to="">
                <Card className=" card-info shadow-lg " >
                    <Card.Img variant="top"className='img-info-card' src={novedades}/>
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
            </Link>
            <Link className="text-decoration-none" to="/asociate">
                <Card className=" card-info shadow-lg " >
                    <Card.Img variant="top"  className='img-info-card' src={asociarte}/>
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
            </Link>
        </div>
  </Container>
  );
}
/*
    <div className="h-100 d-flex justify-content-around align-items-center flex-wrap gap-1 landing-container px-6 py-4 py-lg-5"></div> ¨*/