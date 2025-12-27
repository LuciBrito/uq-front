import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

export function LandingBodyCards() {
  return (
    <CardGroup>
      <Card >
        <Card.Body className='d-flex flex-column align-items-center' >
          <Card.Title>+300</Card.Title>
          <Card.Text>
           empresas asociadas
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Body className='d-flex flex-column align-items-center'>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            representacion regional
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Body className='d-flex flex-column align-items-center'>
          <Card.Title>+50</Card.Title>
          <Card.Text>
         años de trayectoria.
          </Card.Text>
        </Card.Body>
      </Card>
    </CardGroup>
  );
}
