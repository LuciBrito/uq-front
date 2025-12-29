import Card from 'react-bootstrap/Card';

import Ubicacion from './img/icons/location-icon.svg';
import Telefono from './img/icons/phone-icon.svg';
import Mensaje from './img/icons/message-icon.svg';

export default function LandingContactCard() {
  return (
    <Card style={{ width: 'auto' }}>
      <Card.Body>
        <ul className='list-unstyled text-start'>
            <li className='info-text-p'><img src={Mensaje} className="icon-color" alt="Email" style={{ width: '20px', marginRight: '10px' }} /> Info@uiquilmes.org</li>
            <li className='info-text-p'><img src={Telefono} alt="Telefono" style={{ width: '20px', marginRight: '10px' }} /> Telefono: 11 2345-6789</li>
            <li className='info-text-p'><img src={Ubicacion} alt="Ubicacion" style={{ width: '20px', marginRight: '10px' }} /> Direccion: Av. Siempre Viva 123</li>

        </ul>
      </Card.Body>
    </Card>
  );
}