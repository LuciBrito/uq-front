import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import logo from './img/logo-quilmes.png';

export default function LandingHeader() {
  // Estado para controlar la visibilidad del MENÚ COMPLETO en móviles
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // 💡 ESTADO CLAVE: Rastrea qué dropdown está abierto.
  // Será 'institucional', 'departamentos', o null/'' si ninguno está abierto.
  const [openDropdown, setOpenDropdown] = useState(null); 

  const menuRef = useRef(null); 

  // Función para alternar el estado del Menú Principal Móvil
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prev => !prev);
    // Al abrir/cerrar el menú principal, cerramos cualquier submenú abierto
    setOpenDropdown(null); 
  };

  // 💡 NUEVA FUNCIÓN: Alternar un dropdown específico por su ID
  const toggleDropdown = (id) => {
    // Si el dropdown actual (id) ya está abierto, lo cerramos (null).
    // Si está cerrado, abrimos el nuevo dropdown (id).
    setOpenDropdown(prevId => (prevId === id ? null : id));
  };
  
  // Función para cerrar todo al navegar
  const closeAllMenus = () => {
      setIsMobileMenuOpen(false);
      setOpenDropdown(null); // Cerramos cualquier submenú
  }

  // Lógica para cerrar el menú si se hace clic fuera
  useEffect(() => {
    function handleClickOutside(event) {
      if (isMobileMenuOpen && menuRef.current && !menuRef.current.contains(event.target)) {
        closeAllMenus();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  // Función auxiliar para determinar si un dropdown está abierto
  const isDropdownOpen = (id) => openDropdown === id;


  return (
    <header>
      <nav>
        <div className="header-logo">
          <img src={logo} alt="Logo de la empresa" />
        </div>
        
        <button 
          className="burger-menu-button" 
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? '✕' : '☰'} 
        </button>

        {/* MENÚ DE ESCRITORIO */}
        <ul className="nav-links desktop-nav">
          <li><Link to="/">Inicio</Link></li>
          
          {/* ÍTEM INSTITUCIONAL (DROPDOWN DE ESCRITORIO) */}
          <li className='nav-item dropdown-container'
              onClick={() => toggleDropdown('institucional-desktop')} 
          >
            <Link to="/"
              className="dropdown-link"
              onClick={(e) => e.preventDefault()}
            >
              Institucional
            </Link>
            {/* 💡 Comprobamos si el dropdown 'institucional-desktop' está abierto */}
            {isDropdownOpen('institucional-desktop') && (
              <ul className="dropdown-menu" onClick={closeAllMenus}>
                <li><Link to="/historia">Historia</Link></li>
                <li><Link to="/comision-directiva">Comision directiva</Link></li>
                <li><Link to="/socios">Socios</Link></li>
              </ul>
            )}
          </li>

          {/* ÍTEM DEPARTAMENTOS (DROPDOWN DE ESCRITORIO) */}
          <li className='nav-item dropdown-container'
              onClick={() => toggleDropdown('departamentos-desktop')}
          >
            <Link to="/"
              className="dropdown-link"
              onClick={(e) => e.preventDefault()}
            >
              Departamentos
            </Link>
            {/* 💡 Comprobamos si el dropdown 'departamentos-desktop' está abierto */}
            {isDropdownOpen('departamentos-desktop') && (
              <ul className="dropdown-menu" onClick={closeAllMenus}>
                <li><Link to="/">Jovenes Empresarios</Link></li>
                <li><Link to="/">Parques Industriales</Link></li>
                <li><Link to="/socios">Comercio Exterior</Link></li>
              </ul>
            )}
          </li>

          <li><Link to="/Servicios">Servicios</Link></li>
          <li><Link to="">Capacitación</Link></li>
          <li><Link to="#" className="btn-header">Asociate</Link></li>
        </ul>
      </nav>
      
      {/* MENÚ MÓVIL DESPLEGABLE */}
      {isMobileMenuOpen && (
          <div className="mobile-menu-overlay" ref={menuRef}>
            <ul className="mobile-nav-links">
                <li><Link to="/" onClick={closeAllMenus}>Inicio</Link></li>
                
                {/* ÍTEM INSTITUCIONAL (DROPDOWN MÓVIL) */}
                <li className='nav-item dropdown-container'>
                    <Link to="#" 
                          className="dropdown-link" 
                          onClick={(e) => {
                                e.preventDefault(); 
                                toggleDropdown('institucional-mobile'); // ID único
                          }}>
                        Institucional {isDropdownOpen('institucional-mobile') ? ' ▲' : ' ▼'}
                    </Link>
                    {/* 💡 Comprobamos si el dropdown 'institucional-mobile' está abierto */}
                    {isDropdownOpen('institucional-mobile') && (
                      <ul className="dropdown-menu mobile-dropdown">
                        <li><Link to="/historia" onClick={closeAllMenus}>Historia</Link></li>
                        <li><Link to="/comision-directiva" onClick={closeAllMenus}>Comision directiva</Link></li>
                        <li><Link to="/socios" onClick={closeAllMenus}>Socios</Link></li>
                      </ul>
                    )}
                </li>

                {/* ÍTEM DEPARTAMENTOS (DROPDOWN MÓVIL) */}
                <li className='nav-item dropdown-container'>
                    <Link to="#" 
                          className="dropdown-link" 
                          onClick={(e) => {
                                e.preventDefault(); 
                                toggleDropdown('departamentos-mobile'); // ID único
                          }}>
                        Departamentos {isDropdownOpen('departamentos-mobile') ? ' ▲' : ' ▼'}
                    </Link>
                    {/* 💡 Comprobamos si el dropdown 'departamentos-mobile' está abierto */}
                    {isDropdownOpen('departamentos-mobile') && (
                      <ul className="dropdown-menu mobile-dropdown">
                        <li><Link to="/" onClick={closeAllMenus}>Jovenes Empresarios</Link></li>
                        <li><Link to="/" onClick={closeAllMenus}>Parques Industriales</Link></li>
                        <li><Link to="/" onClick={closeAllMenus}>Comercio Exterior</Link></li>
                      </ul>
                    )}
                </li>
                
                <li><Link to="/Servicios" onClick={closeAllMenus}>Servicios</Link></li>
                <li><Link to="#" onClick={closeAllMenus}>Capacitación</Link></li>
                <li className='mobile-button'><Link to="#" className="btn-header" onClick={closeAllMenus}>Asociate</Link></li>
            </ul>
          </div>
      )}
    </header>
  );
}