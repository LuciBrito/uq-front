import { Col, Container, Row } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';


import arqui from './img/servicios-arqui.png';
import catering from './img/servicios-catering.png';
import contabilidad from './img/servicios-contabilidad.png';
import comex from './img/servicios-comex.png';
import finanzas from './img/servicios-finanzas.png';
import limpieza from './img/servicios-limpieza.png';
import habilIndus from './img/servicios-habil-indus.png';
import matafuegos from './img/servicios-matafuegos.png';
import parquesIndus from './img/servicios-parques-indus.png';
import rrhh from './img/servicios-rrhh.png';
import legales from './img/servicios-legales.png';
import medioAmb from './img/servicios-medio-amb.png';
import traducc from './img/servicios-traducc.png';
import higiene from './img/servicios-higiene.png';
import seguros from './img/servicios-seguros.png';


export default function Servicios() {
  return (
   <section className='parallax2 aux-historia container-fix'> 
        <Container className='py-5 lading-container media-aux'>
            <h1 className='text-center color-text-1 '>Servicios </h1>
            <h3 className='text-center color-text-2'>Ofrecemos asesoramiento gratuito y servicios con descuentos para socios</h3>
            <div> 
                <Row className='py-4'>
                    <Col>
                        <a className="text-decoration-none" href="">
                            <Card className=" card-serv shadow-lg  " >
                                <Card.Img variant="top" className='img-serv-card' src={arqui} />
                                <Card.Body>
                                    <Card.Title >
                                        <h3 className='info-text-p text-center'>
                                            Asistencia en Arquitectura y Desarrollo
                                        </h3>
                                    </Card.Title>
                                    <Card.Text className='text-center '>
                                        Estudio A&D
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </a>
                    </Col>
                    <Col>
                        <a className="text-decoration-none" href="">
                            <Card className=" card-serv shadow-lg  " >
                                <Card.Img variant="top" className='img-serv-card' src={catering} />
                                <Card.Body>
                                    <Card.Title >
                                        <h3 className='info-text-p text-center'>
                                            Asistencia en servicios de catering
                                        </h3>
                                    </Card.Title>
                                    <Card.Text className='text-center'>
                                        Maria Eventos
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </a>
                    </Col>
                    <Col>
                        <a className="text-decoration-none" href="">
                            <Card className=" card-serv shadow-lg  " >
                                <Card.Img variant="top" className='img-serv-card' src={comex} />
                                <Card.Body>
                                    <Card.Title >
                                        <h3 className='info-text-p text-center'>
                                            Asistencia en Comercio Exterior
                                        </h3>
                                    </Card.Title>
                                    <Card.Text className='text-center'>
                                        Lic. Gabriel de Simone
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </a>
                    </Col>
                </Row>

                <Row className='py-4'>
                    <Col>
                        <a className="text-decoration-none" href="">
                            <Card className=" card-serv shadow-lg  " >
                                <Card.Img variant="top" className='img-serv-card' src={contabilidad} />
                                <Card.Body>
                                    <Card.Title >
                                        <h3 className='info-text-p text-center'>
                                            Asistencia contable
                                        </h3>
                                    </Card.Title>
                                    <Card.Text className='text-center'>
                                        Estudio Sicuso
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </a>
                    </Col>
                    <Col>
                        <a className="text-decoration-none" href="">
                            <Card className=" card-serv shadow-lg  " >
                                <Card.Img variant="top" className='img-serv-card' src={finanzas} />
                                <Card.Body>
                                    <Card.Title >
                                        <h3 className='info-text-p text-center'>
                                            Asistencia en Servicios Financerios
                                        </h3>
                                    </Card.Title>
                                    <Card.Text className='text-center'>
                                        Alejandro Routhier
                                        Global inversiones
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </a>
                    </Col>
                    <Col>
                        <a className="text-decoration-none" href="">
                            <Card className=" card-serv shadow-lg  " >
                                <Card.Img variant="top" className='img-serv-card' src={habilIndus} />
                                <Card.Body>
                                    <Card.Title >
                                        <h3 className='info-text-p text-center'>
                                            Asesoramiento en habilitaciones industriales
                                        </h3>
                                    </Card.Title>
                                    <Card.Text className='text-center'>
                                        Matias Simois
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </a>
                    </Col>
                </Row>

                <Row className='py-4'>
                    <Col>
                        <a className="text-decoration-none" href="">
                            <Card className=" card-serv shadow-lg  " >
                                <Card.Img variant="top" className='img-serv-card' src={medioAmb} />
                                <Card.Body>
                                    <Card.Title >
                                        <h3 className='info-text-p text-center'>
                                            Asistencia tecnica en impacto ambiental
                                        </h3>
                                    </Card.Title>
                                    <Card.Text className='text-center'>
                                        Zanello Ingenieria
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </a>
                    </Col>
                    <Col>
                        <a className="text-decoration-none" href="">
                            <Card className=" card-serv shadow-lg  " >
                                <Card.Img variant="top" className='img-serv-card' src={legales} />
                                <Card.Body>
                                    <Card.Title >
                                        <h3 className='info-text-p text-center'>
                                            Asistencia Legal
                                        </h3>
                                    </Card.Title>
                                    <Card.Text className='text-center'>
                                        Dr. Gustavo Frasquet 
                                        Dr. Dante Frignani
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </a>
                    </Col>
                    <Col>
                        <a className="text-decoration-none" href="">
                            <Card className=" card-serv shadow-lg  " >
                                <Card.Img variant="top" className='img-serv-card' src={limpieza} />
                                <Card.Body>
                                    <Card.Title >
                                        <h3 className='info-text-p text-center'>
                                            Asistencia en Servicios de Limpieza
                                        </h3>
                                    </Card.Title>
                                    <Card.Text className='text-center'>
                                        Limpia ciudad
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </a>
                    </Col>
                </Row>


                <Row className='py-4'>
                    <Col>
                        <a className="text-decoration-none" href="">
                            <Card className=" card-serv shadow-lg  " >
                                <Card.Img variant="top" className='img-serv-card' src={matafuegos} />
                                <Card.Body>
                                    <Card.Title >
                                        <h3 className='info-text-p text-center'>
                                            Asistencia en matafuegos
                                        </h3>
                                    </Card.Title>
                                    <Card.Text className='text-center'>
                                        Shima Ingenieria
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </a>
                    </Col>
                    <Col>
                        <a className="text-decoration-none" href="">
                            <Card className=" card-serv shadow-lg  " >
                                <Card.Img variant="top" className='img-serv-card' src={parquesIndus} />
                                <Card.Body>
                                    <Card.Title >
                                        <h3 className='info-text-p text-center'>
                                            Asistencia en Parques Industriales
                                        </h3>
                                    </Card.Title>
                                    <Card.Text className='text-center'>
                                        Leonardo Wargner
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </a>
                    </Col>
                    <Col>
                        <a className="text-decoration-none" href="">
                            <Card className=" card-serv shadow-lg  " >
                                <Card.Img variant="top" className='img-serv-card' src={rrhh} />
                                <Card.Body>
                                    <Card.Title >
                                        <h3 className='info-text-p text-center'>
                                            Asistencia en RRHH
                                        </h3>
                                    </Card.Title>
                                    <Card.Text className='text-center'>
                                        MRB Recursos Humanos
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </a>
                    </Col>
                </Row>


                <Row className='py-4'>
                    <Col>
                        <a className="text-decoration-none" href="">
                            <Card className=" card-serv shadow-lg  " >
                                <Card.Img variant="top" className='img-serv-card' src={higiene} />
                                <Card.Body>
                                    <Card.Title >
                                        <h3 className='info-text-p text-center'>
                                            Asistencia en Seguridad e Higiene
                                        </h3>
                                    </Card.Title>
                                    <Card.Text className='text-center'>
                                        Shima Ingenieria
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </a>
                    </Col>
                    <Col>
                        <a className="text-decoration-none" href="">
                            <Card className=" card-serv shadow-lg  " >
                                <Card.Img variant="top" className='img-serv-card' src={seguros} />
                                <Card.Body>
                                    <Card.Title >
                                        <h3 className='info-text-p text-center'>
                                            Asistencia en Seguros y evaluacion de Riesgos
                                        </h3>
                                    </Card.Title>
                                    <Card.Text className='text-center'>
                                        Grupo Diaz Seguros
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </a>
                    </Col>
                    <Col>
                        <a className="text-decoration-none" href="">
                            <Card className=" card-serv shadow-lg  " >
                                <Card.Img variant="top" className='img-serv-card' src={traducc} />
                                <Card.Body>
                                    <Card.Title >
                                        <h3 className='info-text-p text-center'>
                                            Asistencia en traduccion e interpretacion
                                        </h3>
                                    </Card.Title>
                                    <Card.Text className='text-center'>
                                        Lic. Veronica Magan Laca
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </a>
                    </Col>
                </Row>

            </div>
        </Container>
</section>
  )
}
