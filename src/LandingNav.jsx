import  { useState } from 'react';

export default function LandingNav() {
  // Estado para controlar si el submenú de 'Historia' está visible.
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  // Función para alternar el estado (mostrar/ocultar)
  const toggleDropdown = () => {
    setDropdownVisible(prev => !prev);
  };

  // Opcional: useEffect para cerrar el menú al hacer clic fuera
  // (Esto es más avanzado y lo mantendré simple por ahora, pero es recomendable)
  
  return (
    <nav className="navbar">
      <ul className="nav-list">
        
        {/* Opción Inicio */}
        <li className="nav-item">
          <a href="#inicio">Inicio</a>
        </li>

        {/* Opción Historia con Desplegable (Activado por Click) */}
        <li 
          className="nav-item dropdown-container"
        >
          {/* IMPORTANTE: Usamos onClick en el enlace 
            1. Llamamos a toggleDropdown para cambiar el estado.
            2. Evitamos el comportamiento por defecto del enlace (que nos llevaría a #historia)
          */}
          <a 
            href="#historia" 
            className="dropdown-link"
            onClick={(e) => {
              e.preventDefault(); // Detiene la navegación de la URL
              toggleDropdown();
            }}
          >
            Historia
            {/* Cambiamos la flecha según el estado para mejor feedback */}
            <span className="dropdown-arrow"> {isDropdownVisible ? ' ▲' : ' ▼'}</span>
          </a>

          {/* Submenú desplegable, visible si isDropdownVisible es true */}
          {isDropdownVisible && (
            <ul className="dropdown-menu">
              {/* Opciones del submenú */}
              <li><a href="#origenes">Orígenes</a></li>
              <li><a href="#trayectoria">Trayectoria</a></li>
              <li><a href="#hitos">Hitos Clave</a></li>
            </ul>
          )}
        </li>

        {/* Opción Nosotros */}
        <li className="nav-item2">
          <a href="#nosotros">Nosotros</a>
        </li>
      </ul>
    </nav>
  );
};

