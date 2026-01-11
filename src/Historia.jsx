import { Col, Container, Row } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';

import img from './img/img-contact.png';
import becas from './img/icons/becas-icon.svg';
import uni from './img/icons/uni-icon.svg';
import socios from './img/icons/socios-icon.svg';   
import flor from './img/icons/flor-icon.svg';



export default function Historia() {
  return (
   <section className='parallax aux-historia container-fix'> 
        <Container className='py-5 lading-container media-aux'>
            <h1 className='text-center color-text-1 '>Historia </h1>
            <h3 className='text-center color-text-2'>Mas de 50 años acompañando la insdustria local</h3>
            <div> 
                <Row className='py-4'>
                    <Col>
                        <Card  style={{ width:'100%', maxWidth: '25rem' }}>
                            <Card.Body>
                                <Card.Title > <h3 className='color-text-1'>1971 - Fundacion</h3></Card.Title>
                                <Card.Text className='color-text-2'>
                                    Nace la UIQ en el Partido de Quilmes, impulsando el desarrollo industrial local.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card  style={{ width:'100%', maxWidth: '25rem' }}>
                            <Card.Body>
                                <Card.Title> <h3 className='color-text-1'>1987 - Casa propia</h3></Card.Title>
                                <Card.Text className='color-text-2'>
                                    Adquisicion de la sede ubicada en Alvear 867, Quilmes, tras años de crecimiento.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card  style={{ width:'100%', maxWidth: '25rem' }}>
                            <Card.Body>
                                <Card.Title> <h3 className='color-text-1'>1990+ - Crecimiento </h3></Card.Title>
                                <Card.Text className='color-text-2'>
                                    Expansion de servicios y productos, consolidando la presencia en el mercado.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                
                <Row className='row-historia py-4'>
                    <Col>
                        <h1>La casa propia</h1>
                        <p>
                            La búsqueda de la sede propia fue una aspiración que se concretó a fines de 1987 con  la adquisición de la vieja casa ubicada en Alvear 867. Ese mismo año se aprobó su remodelación, realizada en los primeros meses del año siguiente, aportando su fisonomía actual.
                        </p>
                    </Col>
                    <Col className="d-flex justify-content-center align-items-center">
                        <img src={img} alt="Contact"  style={{ width:'400px', borderRadius: '30px' }}/>
                    </Col>
                </Row>

                <Row className='py-4'>
                    <div className='d-flex flex-wrap justify-content-center align-items-center gap-4 cards-container '>
                        <Card  style={{ width:'100%', maxWidth: '30rem' }}>
                            <Card.Body>
                                <Card.Title className='text-center '> <h4 className='color-text-1'>Becas educativas</h4></Card.Title>
                                <Card.Text className='text-center color-text-2'>
                                    <Card.Img style={{width:'50px', paddingRight: '5px'}} src={becas}/>    
                                    Otorgamos becas a estudiantes tecnicos locales.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card  style={{ width:'100%', maxWidth: '30rem' }}>
                            <Card.Body>
                                <Card.Title className='text-center '> <h4 className='color-text-1'>Articulacion con entidades</h4></Card.Title>
     
                                <Card.Text className='text-center color-text-2'>
                                    <Card.Img style={{width:'50px', paddingRight: '5px'}} src={becas}/>  
                                    Acciones junto a entidades locales y zonales
                                </Card.Text>
                            </Card.Body>
                        </Card>
                            <Card  style={{ width:'100%', maxWidth: '30rem' }}>
                            <Card.Body>
                                <Card.Title className='text-center '><h4 className='color-text-1'>Feria de la Flor</h4></Card.Title>
                                
                                <Card.Text className='text-center color-text-2'>
                                    <Card.Img style={{width:'50px', paddingRight: '5px'}} src={flor}/>   
                                    Organizacion de la Feria de la Flor en Quilmes
                                </Card.Text>
                            </Card.Body>
                        </Card>
                            <Card  style={{ width:'100%', maxWidth: '30rem' }}>
                            <Card.Body>
                                <Card.Title className='text-center '><h4 className='color-text-1'>Universidad Nacional de Quilmes</h4></Card.Title>
                         
                                <Card.Text className='text-center '>
                                    <Card.Img style={{width:'50px', paddingRight: '5px'}} src={uni}/>   
                                    Gestiones con la UNQ para crear el Depto. Juridico
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </Row>


            </div>
        </Container>
</section>
  )
}
