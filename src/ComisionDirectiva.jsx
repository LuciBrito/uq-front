import { Col, Container, Row } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';

import horacio from './img/ph-horacio.png';
import secretario from './img/ph-secretario.png';
import tesorero from './img/ph-tesorero.png';
import vice from './img/ph-vicepresidente.png';   




export default function ComisionDirectiva() {
  return (
   <section className='parallax aux-historia'> 
        <Container className='py-5 lading-container media-aux'>
            <h1 className='text-center color-text-1 '>Comision Directiva </h1>
            <h3 className='text-center color-text-2'>Autoridades que conducen nuestra institucion</h3>
            <div> 
                <Row className='py-4 '>
                    <Col className='d-flex justify-content-center'>
                        <Card  style={{ width:'100%', maxWidth: '18rem' }}>
                            <Card.Img variant="top" src={horacio} style={{ height:'200px', width:'100%'}} />
                            <Card.Body>
                                <Card.Title > <h3 className='color-text-1'>Horacio Castagnini</h3></Card.Title>
                                <Card.Text className='color-text-2'>
                                    PRESIDENTE
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                
                <Row className='row-historia py-4'>
                    <Col className='d-flex justify-content-center'>
                        <Card  style={{ width:'100%', maxWidth: '18rem' }}>
                            <Card.Img variant="top" src={vice} style={{ height:'200px', width:'100%'}}/>
                            <Card.Body>
                                <Card.Title > <h3 className='color-text-1'>Oscar Abal</h3></Card.Title>
                                <Card.Text className='color-text-2'>
                                    VICEPRESIDENTE
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                     <Col className='d-flex justify-content-center'>
                        <Card  style={{ width:'100%', maxWidth: '18rem' }}>
                            <Card.Img variant="top" src={secretario} style={{ height:'200px', width:'100%'}} />
                            <Card.Body>
                                <Card.Title > <h3 className='color-text-1'>Nestor Boffelli</h3></Card.Title>
                                <Card.Text className='color-text-2'>
                                    SECRETARIO
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                     <Col className='d-flex justify-content-center'>
                        <Card  style={{ width:'100%', maxWidth: '18rem' }}>
                            <Card.Img variant="top" src={tesorero} style={{ height:'200px', width:'100%'}}/>
                            <Card.Body>
                                <Card.Title > <h3 className='color-text-1'>Alejandro Felipe</h3></Card.Title>
                                <Card.Text className='color-text-2'>
                                    TESORERO
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                <Row className='py-4'>

                </Row>


            </div>
        </Container>
</section>
  )
}
