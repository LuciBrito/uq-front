import Card from 'react-bootstrap/Card';

import Ubicacion from './img/icons/location-icon.svg';
import Telefono from './img/icons/phone-icon.svg';
import Mensaje from './img/icons/message-icon.svg';

export default function LandingContactCard() {
  return (
    <Card style={{ width: 'auto' }}>
      <Card.Body>
        <ul className='list-unstyled text-start'>
            <li className='info-text-p'><img src={Mensaje} className="icon-color" alt="Email" style={{ width: '20px', marginRight: '10px' }} /> uiquilmes.adm@gmail.com</li>
            <li className='info-text-p'><img src={Telefono} alt="Telefono" style={{ width: '20px', marginRight: '10px' }} /> Telefono: 11 7522-7496</li>
            <li className='info-text-p'><img src={Ubicacion} alt="Ubicacion" style={{ width: '20px', marginRight: '10px' }} /> Direccion: Alvear 867, B1878 Quilmes</li>

        </ul>
      </Card.Body>
    </Card>
  );
}