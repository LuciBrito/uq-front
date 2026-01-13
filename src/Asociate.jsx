import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


import logo from './img/logo-quilmes.png'


export default function Asociate() {
  return (
      <section className='parallax aux-historia'> 
        <Container className='py-4 media-aux'>
            <h1 className='text-center color-text-1 '>Ingresar </h1>
            <h3 className='text-center color-text-2'>Inicia sesion o crea tu cuenta para acceder a los beneficios</h3>
            <div> 
                <Row style={{backgroundColor:'#d1d7f0', padding:'40px', borderRadius:'20px' }}>
                    <Col >
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Email" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Contraseña</Form.Label>
                                <Form.Control type="password" placeholder="Contraseña" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Iniciar Sesion
                            </Button>
                        </Form>
                    </Col>
                       
                    <Col>
                        <div className='d-flex flex-column align-items-center'>
                            <div>
                                <img src={logo} alt="Logo" style={{ height:'150px', width:'200px'}} />
                            </div>
                            <div>
                                <h3 className='color-text-2'>Union Industrial Quilmes </h3>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </Container>
</section>
  )
}
