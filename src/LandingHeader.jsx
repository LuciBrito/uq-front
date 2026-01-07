import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import logo from './img/logo-quilmes.png';
import LandingNav from './LandingNav';

export default function LandingHeader() {
  // Estado para controlar si el submenú de 'Historia' está visible.
  const [menuOpen, setMenuOpen] = useState(false);

  const menuOpenRef = useRef(null);

  // Función para alternar el estado (mostrar/ocultar)
  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };
useEffect(() => {
    // Función que se ejecuta en cualquier clic en el documento
    function handleClickOutside(event) {
      // 4. Comprobar si el menú está visible Y si el clic NO ocurrió dentro del contenedor
      //    (El 'current' es el elemento <li> al que apuntamos con useRef)
      if (menuOpen && menuOpenRef.current && !menuOpenRef.current.contains(event.target)) {
        setMenuOpen(false); // Si es clic afuera, ¡ciérralo!
      }
    }

    // 5. Adjuntar el detector de eventos al documento cuando el componente se monta
    document.addEventListener("mousedown", handleClickOutside);
    
    // 6. Función de limpieza: Se ejecuta cuando el componente se desmonta (o el efecto se vuelve a ejecutar)
    //    Esto es VITAL para evitar fugas de memoria y que la función siga corriendo inútilmente
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]); // 7. La dependencia asegura que se reevalúe cuando el estado del menú cambie
  
  return (
    <header>
      <nav>
        <ul>
          <div className="header-logo">
            <img src={logo} alt="Logo de la empresa" />
          </div>
        </ul>

        <ul className="nav-links aux-none">
          <li>
            <Link to="/">
              Inicio
            </Link></li>
          <li className='nav-item dropdown-container'
          ref={menuOpenRef}>
            <Link to="/"
              className="dropdown-link"
              onClick={(e) => {
                e.preventDefault(); // Detiene la navegación de la URL
                toggleMenu();
              }}
            >
              Institucional
            </Link>
                    
          {menuOpen && (
            <ul className="dropdown-menu">
              <li><Link to="/historia">Historia</Link></li>
              <li><Link to="/historia">Comision directiva</Link></li>
              <li><Link to="#hitos">Socios</Link></li>
            </ul>
          )}
          </li>
          <li>
            <Link to="">
              Departamentos
            </Link>
          </li>
          <li>
            <Link to="">
              Servicios
            </Link>
          </li>
          <li>
            <Link to="">
              Capacitación
            </Link>
          </li>
          <li><Link to="#" className="btn-header">Asociate</Link></li>
        </ul>
      </nav>
   
    </header>
  );
}

/*

 
          <a 
            href="#historia" 
            className="dropdown-link"
            onClick={(e) => {
              e.preventDefault(); // Detiene la navegación de la URL
              toggleDropdown();
            }}
          >
            Historia
            Cambiamos la flecha según el estado para mejor feedback
            <span className="dropdown-arrow"> {isDropdownVisible ? ' ▲' : ' ▼'}</span>
          </a>

          Submenú desplegable, visible si isDropdownVisible es true 
          {isDropdownVisible && (
            <ul className="dropdown-menu">
               Opciones del submenú 
              <li><a href="#origenes">Orígenes</a></li>
              <li><a href="#trayectoria">Trayectoria</a></li>
              <li><a href="#hitos">Hitos Clave</a></li>
            </ul>
          )}
  */

