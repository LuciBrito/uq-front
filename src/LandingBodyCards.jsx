import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

import Ubicacion from './img/icons/location-icon.svg';

export function LandingBodyCards() {
  return (
    <CardGroup>
      <Card >
        <Card.Body className='d-flex flex-column align-items-center' >
          <Card.Title><h1 className='info-text-h1'>+300</h1></Card.Title>
          <Card.Text>
            <p className=''>           
                empresas asociadas
            </p>
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Body className='d-flex flex-column align-items-center'>
          <Card.Title><h1 className='info-text-h1'>+50</h1></Card.Title>
          <Card.Text>
            <p className=''>
              años de trayectoria
            </p>
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Body className='d-flex flex-column align-items-center'>
          <Card.Title><img src={Ubicacion} alt="Ubicación" style={{height:'80px'}} /></Card.Title>
          <Card.Text>
         representacion regional
          </Card.Text>
        </Card.Body>
      </Card>
    </CardGroup>
  );
}
