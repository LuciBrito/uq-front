import Card from 'react-bootstrap/Card';

export default function LandingContactCard() {
  return (
    <Card style={{ width: 'auto' }}>
      <Card.Body>
        <ul className='list-unstyled text-start'>
            <li>Info@uiquilmes.org</li>
            <li>Telefono: 11 2345-6789</li>
            <li>Direccion: Av. Siempre Viva 123</li>

        </ul>
      </Card.Body>
    </Card>
  );
}