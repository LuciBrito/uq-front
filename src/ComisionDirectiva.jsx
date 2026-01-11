import { Col, Container, Row } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';

import horacio from './img/ph-horacio.png';
import secretario from './img/ph-secretario.png';
import tesorero from './img/ph-tesorero.png';
import vice from './img/ph-vicepresidente.png';   


export default function ComisionDirectiva() {
  return (
   <section className='parallax aux-historia'> 
        <Container className='py-5  media-aux'>
            <h1 className='text-center color-text-1 '>Comision Directiva </h1>
            <h3 className='text-center color-text-2'>Autoridades que conducen nuestra institucion</h3>
            <div> 
                
                <Row className='py-4 '>
                    <Col className='d-flex justify-content-center'>
                        <Card className='shadow' style={{ width:'100%', maxWidth: '18rem', }}>
                            <div className='d-flex justify-content-center align-items-center pt-2'>
                                <Card.Img variant="top" src={horacio} style={{ height:'200px', width:'100%', width:'200px', borderRadius:'100%'}} />
                            </div>
                            <Card.Body>
                                <Card.Title > <h3 className='color-text-1 text-center'>Horacio Castagnini</h3></Card.Title>
                                <Card.Text className='color-text-2 text-center'>
                                    PRESIDENTE
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                
                <Row className='row-historia py-4 text-secondary ' style={{backgroundColor:'#22347c'}}>
                    <Col className='d-flex justify-content-center'>
                        <Card  style={{ width:'100%', maxWidth: '18rem' }}>
                            <div className='d-flex justify-content-center align-items-center'>
                                <Card.Img variant="top" src={vice} style={{ height:'200px', width:'200px', borderRadius:'100%', paddingTop:'10px' }}/>
                            </div>
                            <Card.Body>
                                <Card.Title > <h3 className='color-text-1 text-center'>Oscar Abal</h3></Card.Title>
                                <Card.Text className='color-text-2 text-center'>
                                    VICEPRESIDENTE
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                     <Col className='d-flex justify-content-center '>
                        <Card  style={{ width:'100%', maxWidth: '18rem' }}>
                            <div className='d-flex justify-content-center align-items-center'>    
                                <Card.Img variant="top" src={secretario} style={{ height:'200px', width:'200px', borderRadius:'100%', paddingTop:'10px'}} />
                            </div>
                            <Card.Body>
                                <Card.Title > <h3 className='color-text-1 text-center'>Nestor Boffelli</h3></Card.Title>
                                <Card.Text className='color-text-2 text-center'>
                                    SECRETARIO
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                     <Col className='d-flex justify-content-center'>
                        <Card  style={{ width:'100%', maxWidth: '18rem' }}>
                            <div className='d-flex justify-content-center align-items-center'>   
                                <Card.Img variant="top" src={tesorero} style={{ height:'200px', width:'200px', borderRadius:'100%', paddingTop:'10px'}}/>
                            </div>
                            <Card.Body>
                                <Card.Title > <h3 className='color-text-1 text-center'>Alejandro Felipe</h3></Card.Title>
                                <Card.Text className='color-text-2 text-center'>
                                    TESORERO
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                <Row className='py-4'>
                    <Col className='d-flex justify-content-center'>
                        <Card  style={{ width:'100%', maxWidth: '23rem', backgroundColor:'#22347c', padding:'20px', borderRadius:'5%' }}>
                            <Card.Body>
                                <Card.Title > <h3 className='text-title text-center'>PROSECRETARIO</h3></Card.Title>
                                <Card.Text className='text-p text-center'>
                                    Gabriel Dalli
                                </Card.Text>
                                <Card.Text className='text-p text-center '>
                                    Super Congelados Rio de la Plata
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='d-flex justify-content-center'>
                        <Card  style={{ width:'100%', maxWidth: '23rem', backgroundColor:'#22347c', padding:'20px', borderRadius:'5%' }}>
                            <Card.Body>
                                <Card.Title > <h3 className='text-title text-center'>PROTESORERO</h3></Card.Title>
                                <Card.Text className='text-p text-center'>
                                    Dario Ricci
                                </Card.Text>
                                <Card.Text className='text-p text-center'>
                                    Alimentos Santa Cruz
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                <Row className='py-4'>
                    <Col className='d-flex justify-content-center'>
                        <Card  style={{ width:'100%', maxWidth: '23rem', backgroundColor:'#22347c', padding:'20px', borderRadius:'5%' }}>
                            <Card.Body>
                                <Card.Title > <h3 className='text-subt  text-center'>VOCAL TITULAR 1°</h3></Card.Title>
                                <Card.Text className='text-p text-center'>
                                    Angel Altamura
                                </Card.Text>
                                <Card.Text className='text-p text-center'>
                                    Plasticos Altamura
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='d-flex justify-content-center'>
                        <Card  style={{ width:'100%', maxWidth: '23rem', backgroundColor:'#22347c', padding:'20px', borderRadius:'5%' }}>
                            <Card.Body>
                                <Card.Title > <h3 className='text-subt text-center'>VOCAL TITULAR 2°</h3></Card.Title>
                                <Card.Text className='text-p text-center'>
                                    Walter Cortez
                                </Card.Text>
                                <Card.Text className='text-p text-center'>
                                    El progreso LTDA
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='d-flex justify-content-center'>
                        <Card  style={{ width:'100%', maxWidth: '23rem', backgroundColor:'#22347c', padding:'20px', borderRadius:'5%' }}>
                            <Card.Body>
                                <Card.Title > <h3 className='text-subt text-center'>VOCAL TITULAR 3°</h3></Card.Title>
                                <Card.Text className='text-p text-center'>
                                    Carolina Diaz
                                </Card.Text>
                                <Card.Text className='text-p text-center'>
                                    Grupo Diaz Seguros
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                <Row className='py-4'>
                    <Col className='d-flex justify-content-center'>
                        <Card  style={{ width:'100%', maxWidth: '23rem', backgroundColor:'#22347c', padding:'20px', borderRadius:'5%' }}>
                            <Card.Body>
                                <Card.Title > <h3 className='text-subt text-center'>VOCAL TITULAR 4°</h3></Card.Title>
                                <Card.Text className='text-p text-center'>
                                   Sabrina Scafati
                                </Card.Text>
                                <Card.Text className='text-p text-center'>
                                    Parque Industrial La Bernalesa
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='d-flex justify-content-center'>
                        <Card  style={{ width:'100%', maxWidth: '23rem', backgroundColor:'#22347c', padding:'20px', borderRadius:'5%' }}>
                            <Card.Body>
                                <Card.Title > <h3 className='text-subt text-center'>VOCAL TITULAR 5°</h3></Card.Title>
                                <Card.Text className='text-p text-center'>
                                    Laura Lopez
                                </Card.Text>
                                <Card.Text className='text-p text-center'>
                                    Refineria de grasa sudamericana
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='d-flex justify-content-center'>
                        <Card  style={{ width:'100%', maxWidth: '23rem', backgroundColor:'#22347c', padding:'20px', borderRadius:'5%' }}>
                            <Card.Body>
                                <Card.Title > <h3 className='text-subt text-center'>VOCAL TITULAR 6°</h3></Card.Title>
                                <Card.Text className='text-p text-center'>
                                    Carlos Legaz
                                </Card.Text>
                                <Card.Text className='text-p text-center'>
                                    Estudio A y D
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>


                <Row className='py-4'>
                    <Col className='d-flex justify-content-center'>
                        <Card  style={{ width:'100%', maxWidth: '18rem', backgroundColor:'#0493dd', padding:'10px', borderRadius:'5%' }}>
                            <Card.Body>
                                <Card.Title > <h3 className='text-subt text-center'>VOCAL SUPLENTE 1°</h3></Card.Title>
                                <Card.Text className='text-p text-center'>
                                    Gabriel De Simone
                                </Card.Text>
                                <Card.Text className='text-p text-center'>
                                    Plaza Franca
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='d-flex justify-content-center'>
                        <Card  style={{ width:'100%', maxWidth: '18rem', backgroundColor:'#0493dd', padding:'10px', borderRadius:'5%' }}>
                            <Card.Body>
                                <Card.Title > <h3 className='text-subt text-center'>VOCAL SUPLENTE 2°</h3></Card.Title>
                                <Card.Text className='text-p text-center'>
                                    Pablo Kalogiannidis
                                </Card.Text>
                                <Card.Text className='text-p text-center'>
                                    Electrodescuento S.A.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='d-flex justify-content-center'>
                        <Card  style={{ width:'100%', maxWidth: '18rem', backgroundColor:'#0493dd', padding:'10px', borderRadius:'5%' }}>
                            <Card.Body>
                                <Card.Title > <h3 className='text-subt text-center '>VOCAL SUPLENTE 3°</h3></Card.Title>
                                <Card.Text className='text-p text-center'>
                                    Daniela Vicente
                                </Card.Text>
                                <Card.Text className='text-p text-center'>
                                    Texfilt
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='d-flex justify-content-center'>
                        <Card  style={{ width:'100%', maxWidth: '18rem', backgroundColor:'#0493dd',  padding:'10px', borderRadius:'5%'}}>
                            <Card.Body>
                                <Card.Title > <h3 className='text-subt text-center'>VOCAL SUPLENTE 4°</h3></Card.Title>
                                <Card.Text className='text-p text-center'>
                                    Gaston Dreyer
                                </Card.Text>
                                <Card.Text className='text-p text-center'>
                                    Electrogen
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>


                <Row className='py-4'>
                    <Col className='d-flex justify-content-center'>
                        <Card  style={{ width:'100%', maxWidth: '18rem', backgroundColor:'#0493dd', padding:'10px', borderRadius:'5%' }}>
                            <Card.Body>
                                <Card.Title > <h3 className='text-subt text-center'>VOCAL SUPLENTE 5°</h3></Card.Title>
                                <Card.Text className='text-p text-center'>
                                    Leandro Martin
                                </Card.Text>
                                <Card.Text className='text-p text-center'>
                                    Plasticos Patagonia
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='d-flex justify-content-center'>
                        <Card  style={{ width:'100%', maxWidth: '18rem', backgroundColor:'#0493dd', padding:'10px', borderRadius:'5%' }}>
                            <Card.Body>
                                <Card.Title > <h3 className='text-subt text-center'>VOCAL SUPLENTE 6°</h3></Card.Title>
                                <Card.Text className='text-p text-center'>
                                    Marina Rodriguez
                                </Card.Text>
                                <Card.Text className='text-p text-center'>
                                    MRB Recursos Humanos
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='d-flex justify-content-center'>
                        <Card  style={{ width:'100%', maxWidth: '18rem', backgroundColor:'#0493dd', padding:'10px', borderRadius:'5%' }}>
                            <Card.Body>
                                <Card.Title > <h3 className='text-subt text-center'>REVISOR DE CUENTAS TITULAR 1°</h3></Card.Title>
                                <Card.Text className='text-p text-center'>
                                    Pablo Sanchez
                                </Card.Text>
                                <Card.Text className='text-p text-center'>
                                    Industrializadora de envases
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                                        <Col className='d-flex justify-content-center'>
                        <Card  style={{ width:'100%', maxWidth: '18rem', backgroundColor:'#0493dd', padding:'10px', borderRadius:'5%' }}>
                            <Card.Body>
                                <Card.Title > <h3 className='text-subt text-center'>REVISOR DE CUENTAS TITULAR 2°</h3></Card.Title>
                                <Card.Text className='text-p text-center'>
                                    Fabian Benitez
                                </Card.Text>
                                <Card.Text className='text-p text-center'>
                                    Limpia ciudad
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                <Row className='py-4'>
                    <Col className='d-flex justify-content-center'>
                        <Card  style={{ width:'100%', maxWidth: '18rem', backgroundColor:'#0493dd', padding:'10px', borderRadius:'5%' }}>
                            <Card.Body>
                                <Card.Title > <h3 className='text-subt text-center'>REVISOR DE CUENTAS TITULAR 3°</h3></Card.Title>
                                <Card.Text className='text-p text-center'>
                                    Adrian Ojeda
                                </Card.Text>
                                <Card.Text className='text-p text-center'>
                                    Shima Ingenieria
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='d-flex justify-content-center'>
                        <Card  style={{ width:'100%', maxWidth: '18rem', backgroundColor:'#0493dd', padding:'10px', borderRadius:'5%' }}>
                            <Card.Body>
                                <Card.Title > <h3 className='text-subt text-center'>REVISOR DE CUENTAS SUPLENTES 1°</h3></Card.Title>
                                <Card.Text className='text-p text-center'>
                                    Bruno Pellegrino
                                </Card.Text>
                                <Card.Text className='text-p text-center'>
                                    Preimpregnados Argentina
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='d-flex justify-content-center'>
                        <Card  style={{ width:'100%', maxWidth: '18rem', backgroundColor:'#0493dd', padding:'10px', borderRadius:'5%' }}>
                            <Card.Body>
                                <Card.Title > <h3 className='text-subt text-center'>REVISOR DE CUENTAS SUPLENTES 2°</h3></Card.Title>
                                <Card.Text className='text-p text-center'>
                                    Veronica Magan Laca
                                </Card.Text>
                                <Card.Text className='text-p text-center'>
                                    VLM Traducciones
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='d-flex justify-content-center'>
                        <Card  style={{ width:'100%', maxWidth: '18rem', backgroundColor:'#0493dd', padding:'10px', borderRadius:'5%' }}>
                            <Card.Body>
                                <Card.Title > <h3 className='text-subt text-center'>REVISOR DE CUENTAS SUPLENTES 3°</h3></Card.Title>
                                <Card.Text className='text-p text-center'>
                                    Alejandro Donato
                                </Card.Text>
                                <Card.Text className='text-p text-center'>
                                    Cerveceria Quilmes
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                <Row className='py-4 '>
                    <Col className='d-flex justify-content-center'>
                        <Card  style={{ width:'100%', maxWidth: '23rem', backgroundColor:'#0493dd', padding:'10px', borderRadius:'5%' }}>
                            <Card.Body>
                                <Card.Title > <h3 className='text-subt text-center'>DIRECTOR EJECUTIVO</h3></Card.Title>
                                <Card.Text className='text-p text-center'>
                                    Mariano Castagnini
                                </Card.Text>
                                <Card.Text className='text-p text-center'>
                                    Consulting Baires
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