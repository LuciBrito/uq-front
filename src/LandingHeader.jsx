import logo from './img/logo-quilmes.png';

export default function LandingHeader() {
  return (
    <header>
        <nav>
            <ul>
                <div className="header-logo">
                    <img src={logo} alt="Logo de la empresa" />
                </div>
            </ul>
            <ul>
                <li>
                    <a href="">
                        Inicio
                    </a>
                </li>
                <li>
                    <a href="">
                    Quienes somos?
                    </a>
                </li>
                <li>
                    <a href="">
                        Servicios
                    </a>
                </li>
                <li>
                    <a href="">
                        Capacitacion
                    </a>
                </li>
                <li> 
                    <a href="#" className='btn'>
                        Asociate
                    </a>
                </li>
            </ul>
        </nav>
    </header>
  )
}
