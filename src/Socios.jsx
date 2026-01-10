import { Col, Container, Row } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';

import alimentos from './img/socios-alimentos.png';
import autopartes from './img/socios-autopartes.png';
import comercio from './img/socios-comercio.png';
import construccion from './img/socios-construccion.png';
import electricos from './img/socios-electricos.png';
import embalajes from './img/socios-embalajes.png';
import grafica from './img/socios-grafica.png';
import informatica from './img/socios-informatica.png';
import insumos from './img/socios-insumos.png';
import logistica from './img/socios-logistica.png';
import maquinaria from './img/socios-maquinaria.png';
import metalu from './img/socios-metalurg.png';
import papel from './img/socios-papel.png';
import plastico from './img/socios-plastico.png';
import quimica from './img/socios-quimica.png';
import servicios from './img/socios-servicios.png';
import textil from './img/socios-textil.png';
import vidrio from './img/socios-vidrio.png';

export default function Socios() {
  return (
   <section className='parallax aux-historia'> 
        <Container className='py-5 lading-container media-aux'>
            <h1 className='text-center color-text-1 '>Nuestros Socios </h1>
         
            <div> 
                <Row className='py-4'>
                    <Col>
                        <Card className='shadow-lg' style={{ width:'100%', maxWidth: '20rem' , padding:'10px', borderRadius:'5&'}}>
                            <Card.Body className='d-flex flex-row align-items-center justify-content-around'>
                                <Card.Img style={{width:'70px', paddingRight: '5px'}} src={alimentos} />   
                                <Card.Text className='color-text-1'>
                                    Alimentos y bebidas
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className='shadow-lg' style={{ width:'100%', maxWidth: '20rem' , padding:'10px', borderRadius:'5&'}}>
                            <Card.Body className='d-flex flex-row align-items-center justify-content-around'>
                                <Card.Img style={{width:'70px', paddingRight: '5px'}} src={autopartes} />   
                                <Card.Text className='color-text-1'>
                                    AutoPartes
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className='shadow-lg' style={{ width:'100%', maxWidth: '20rem' , padding:'10px', borderRadius:'5&'}}>
                            <Card.Body className='d-flex flex-row align-items-center justify-content-around'>
                                <Card.Img style={{width:'70px', paddingRight: '5px'}} src={comercio} />   
                                <Card.Text className='color-text-1'>
                                    Comercio y servicios
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>


                <Row className='py-4'>
                    <Col>
                        <Card className='shadow-lg' style={{ width:'100%', maxWidth: '20rem' , padding:'10px', borderRadius:'5&'}}>
                            <Card.Body className='d-flex flex-row align-items-center justify-content-around'>
                                <Card.Img style={{width:'70px', paddingRight: '5px'}} src={construccion} />   
                                <Card.Text className='color-text-1'>
                                    Construccion
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className='shadow-lg' style={{ width:'100%', maxWidth: '20rem' , padding:'10px', borderRadius:'5&'}}>
                            <Card.Body className='d-flex flex-row align-items-center justify-content-around'>
                                <Card.Img style={{width:'70px', paddingRight: '5px'}} src={embalajes} />   
                                <Card.Text className='color-text-1'>
                                    Envases y embalajes
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className='shadow-lg' style={{ width:'100%', maxWidth: '20rem' , padding:'10px', borderRadius:'5&'}}>
                            <Card.Body className='d-flex flex-row align-items-center justify-content-around'>
                                <Card.Img style={{width:'70px', paddingRight: '5px'}} src={grafica} />   
                                <Card.Text className='color-text-1'>
                                    Grafica y publicidad
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>


                <Row className='py-4'>
                    <Col>
                        <Card className='shadow-lg' style={{ width:'100%', maxWidth: '20rem' , padding:'10px', borderRadius:'5&'}}>
                            <Card.Body className='d-flex flex-row align-items-center justify-content-around'>
                                <Card.Img style={{width:'70px', paddingRight: '5px'}} src={informatica} />   
                                <Card.Text className='color-text-1'>
                                    Informatica
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className='shadow-lg' style={{ width:'100%', maxWidth: '20rem' , padding:'10px', borderRadius:'5&'}}>
                            <Card.Body className='d-flex flex-row align-items-center justify-content-around'>
                                <Card.Img style={{width:'70px', paddingRight: '5px'}} src={insumos} />   
                                <Card.Text className='color-text-1'>
                                    Insumos
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className='shadow-lg' style={{ width:'100%', maxWidth: '20rem' , padding:'10px', borderRadius:'5&'}}>
                            <Card.Body className='d-flex flex-row align-items-center '>
                                <Card.Img style={{width:'70px', paddingRight: '5px'}} src={logistica} />   
                                <Card.Text className='color-text-1'>
                                    Logistica
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>



                                <Row className='py-4'>
                    <Col>
                        <Card className='shadow-lg' style={{ width:'100%', maxWidth: '20rem' , padding:'10px', borderRadius:'5&'}}>
                            <Card.Body className='d-flex flex-row align-items-center justify-content-around'>
                                <Card.Img style={{width:'70px', paddingRight: '5px'}} src={maquinaria} />   
                                <Card.Text className='color-text-1'>
                                    Maquinaria y equipos
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className='shadow-lg' style={{ width:'100%', maxWidth: '20rem' , padding:'10px', borderRadius:'5&'}}>
                            <Card.Body className='d-flex flex-row align-items-center justify-content-around'>
                                <Card.Img style={{width:'70px', paddingRight: '5px'}} src={electricos} />   
                                <Card.Text className='color-text-1'>
                                    Materiales electricos
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className='shadow-lg' style={{ width:'100%', maxWidth: '20rem' , padding:'10px', borderRadius:'5&'}}>
                            <Card.Body className='d-flex flex-row align-items-center justify-content-around'>
                                <Card.Img style={{width:'70px', paddingRight: '5px'}} src={metalu} />   
                                <Card.Text className='color-text-1'>
                                    Metalurgica
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>


                <Row className='py-4'>
                    <Col>
                        <Card className='shadow-lg' style={{ width:'100%', maxWidth: '20rem' , padding:'10px', borderRadius:'5&'}}>
                            <Card.Body className='d-flex flex-row align-items-center justify-content-around'>
                                <Card.Img style={{width:'70px', paddingRight: '5px'}} src={papel} />   
                                <Card.Text className='color-text-1'>
                                    Papel y carton
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className='shadow-lg' style={{ width:'100%', maxWidth: '20rem' , padding:'10px', borderRadius:'5&'}}>
                            <Card.Body className='d-flex flex-row align-items-center justify-content-around'>
                                <Card.Img style={{width:'70px', paddingRight: '5px'}} src={plastico} />   
                                <Card.Text className='color-text-1'>
                                    Plastico y caucho
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className='shadow-lg' style={{ width:'100%', maxWidth: '20rem' , padding:'10px', borderRadius:'5&'}}>
                            <Card.Body className='d-flex flex-row align-items-center justify-content-around'>
                                <Card.Img style={{width:'70px', paddingRight: '5px'}} src={quimica} />   
                                <Card.Text className='color-text-1'>
                                    Quimica
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>


                <Row className='py-4'>
                    <Col>
                        <Card className='shadow-lg' style={{ width:'100%', maxWidth: '20rem' , padding:'10px', borderRadius:'5&'}}>
                            <Card.Body className='d-flex flex-row align-items-center justify-content-around'>
                                <Card.Img style={{width:'70px', paddingRight: '5px'}} src={servicios} />   
                                <Card.Text className='color-text-1'>
                                    Servicio
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className='shadow-lg' style={{ width:'100%', maxWidth: '20rem' , padding:'10px', borderRadius:'5&'}}>
                            <Card.Body className='d-flex flex-row align-items-center justify-content-around'>
                                <Card.Img style={{width:'70px', paddingRight: '5px'}} src={textil} />   
                                <Card.Text className='color-text-1'>
                                    Textil e indumentaria
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className='shadow-lg' style={{ width:'100%', maxWidth: '20rem' , padding:'10px', borderRadius:'5&'}}>
                            <Card.Body className='d-flex flex-row align-items-center justify-content-around'>
                                <Card.Img style={{width:'70px', paddingRight: '5px'}} src={vidrio} />   
                                <Card.Text className='color-text-1'>
                                    Vidrio
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>


            </div>
        </Container>
</section>
  )
}
