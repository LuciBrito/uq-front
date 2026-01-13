import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import logo from './img/logo-quilmes.png';

export default function LandingHeader() {
  // Estado para controlar la visibilidad del MENÚ COMPLETO en móviles
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // ESTADO CLAVE: Rastrea qué dropdown está abierto.
  const [openDropdown, setOpenDropdown] = useState(null); 

  const menuRef = useRef(null); // Ref para el Menú Móvil (overlay)
  
  // Ref para el menú de Escritorio. Necesitamos detectar clic fuera de estos dos elementos para Desktop
  const instDesktopRef = useRef(null); 
  const deptDesktopRef = useRef(null);

  // Función para alternar el estado del Menú Principal Móvil
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prev => !prev);
    setOpenDropdown(null); 
  };

  // Función: Alternar un dropdown específico por su ID
  const toggleDropdown = (id) => {
    setOpenDropdown(prevId => (prevId === id ? null : id));
  };
  
  // Función para cerrar todo al navegar
  const closeAllMenus = () => {
      setIsMobileMenuOpen(false);
      setOpenDropdown(null); 
  }
  
  // Función auxiliar para determinar si un dropdown está abierto
  const isDropdownOpen = (id) => openDropdown === id;


  // Lógica para cerrar TODO si se hace clic fuera del HEADER (Desktop)
  useEffect(() => {
    function handleClickOutside(event) {
      // Si el menú móvil está abierto, el cierre se maneja por la ref principal (menuRef)
      if (isMobileMenuOpen) {
          if (menuRef.current && !menuRef.current.contains(event.target)) {
              closeAllMenus();
          }
      } else {
          // Lógica para cerrar Dropdowns de Escritorio
          const clickedOutsideInst = instDesktopRef.current && !instDesktopRef.current.contains(event.target);
          const clickedOutsideDept = deptDesktopRef.current && !deptDesktopRef.current.contains(event.target);
          
          // Si hay un dropdown abierto Y el clic no fue en ninguno de los contenedores
          if (openDropdown && clickedOutsideInst && clickedOutsideDept) {
              setOpenDropdown(null);
          }
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobileMenuOpen, openDropdown]); // Agregamos openDropdown como dependencia para reevaluar la lógica


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
          {/* 💡 Agregamos la referencia a la lista LI */}
          <li className='nav-item dropdown-container'
             ref={instDesktopRef}
              onClick={() => toggleDropdown('institucional-desktop')} 
          >
            <Link to="/"
              className="dropdown-link"
              onClick={(e) => e.preventDefault()}
            >
              Institucional
            </Link>
            {isDropdownOpen('institucional-desktop') && (
              <ul className="dropdown-menu" onClick={closeAllMenus}>
                <li><Link to="/historia" onClick={() => setMenuOpen(false)}>Historia</Link></li>
                <li><Link to="/comision-directiva" onClick={() => setMenuOpen(false)}>Comision directiva</Link></li>
                <li><Link to="/socios" onClick={() => setMenuOpen(false)}>Socios</Link></li>
              </ul>
            )}
          </li>

          {/* ÍTEM DEPARTAMENTOS (DROPDOWN DE ESCRITORIO) */}
          {/* 💡 Agregamos la referencia a la lista LI */}
          <li className='nav-item dropdown-container'
              ref={deptDesktopRef}
              onClick={() => toggleDropdown('departamentos-desktop')}
          >
            <Link to="/"
              className="dropdown-link"
              onClick={(e) => e.preventDefault()}
            >
              Departamentos
            </Link>
            {isDropdownOpen('departamentos-desktop') && (
              <ul className="dropdown-menu" onClick={closeAllMenus}>
                <li><Link to="/" onClick={() => setMenuOpen(false)}>Jovenes Empresarios</Link></li>
                <li><Link to="/" onClick={() => setMenuOpen(false)}>Parques Industriales</Link></li>
                <li><Link to="/socios" onClick={() => setMenuOpen(false)}>Comercio Exterior</Link></li>
              </ul>
            )}
          </li>

          <li><Link to="/Servicios">Servicios</Link></li>
          <li><Link to="">Capacitación</Link></li>
          <li><Link to="/asociate" className="btn-header">Asociate</Link></li>
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
                <li className='mobile-button'><Link to='/asociate' className="btn-header" onClick={closeAllMenus}>Asociate</Link></li>
            </ul>
          </div>
      )}
    </header>
  );
}