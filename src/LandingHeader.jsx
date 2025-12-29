import { useState } from "react";
import logo from './img/logo-quilmes.png';

export default function LandingHeader() {
  const [openMenu, setOpenMenu] = useState(null);

  const handleEnter = (menu) => {
    if (window.innerWidth > 992) setOpenMenu(menu);
  };

  const handleLeave = () => {
    if (window.innerWidth > 992) setOpenMenu(null);
  };

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  return (
    <header>
      <nav>
        <ul>
          <div className="header-logo">
            <img src={logo} alt="Logo de la empresa" />
          </div>
        </ul>

        <ul className="nav-links">
          <li><a href="">Inicio</a></li>

          {/* QUIENES SOMOS */}
          <li>
            <div
              className={`nav-item ${openMenu === "quienes" ? "open" : ""}`}
              onMouseEnter={() => handleEnter("quienes")}
              onMouseLeave={handleLeave}
            >
              <a href="#" onClick={() => toggleMenu("quienes")}>
                ¿Quiénes somos?
              </a>
              <div className="dropdown">
                <a href="#">Historia</a>
                <a href="#">Comisión Directiva</a>
                <a href="#">Socios</a>
              </div>
            </div>
          </li>

          {/* DEPARTAMENTOS */}
          <li>
            <div
              className={`nav-item ${openMenu === "departamentos" ? "open" : ""}`}
              onMouseEnter={() => handleEnter("departamentos")}
              onMouseLeave={handleLeave}
            >
              <a href="#" onClick={() => toggleMenu("departamentos")}>
                Departamentos
              </a>
              <div className="dropdown">
                <a href="#">Depto 1</a>
                <a href="#">Depto 2</a>
                <a href="#">Depto 3</a>
              </div>
            </div>
          </li>

          <li><a href="">Servicios</a></li>
          <li><a href="">Capacitación</a></li>
          <li><a href="#" className="btn-header">Asociate</a></li>
        </ul>
      </nav>
    </header>
  );
}

/*

import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <div className="logo">UIQ</div>

      <nav className="nav">
        <a href="#">Inicio</a>

        { 👇 MENU DESPLEGABLE }
        <div
          className={`nav-item ${open ? "open" : ""}`}
          onMouseEnter={() => window.innerWidth > 992 && setOpen(true)}
          onMouseLeave={() => window.innerWidth > 992 && setOpen(false)}
        >
          <span onClick={() => setOpen(!open)}>Institucional</span>

          <div className="dropdown">
            <a href="#">Historia</a>
            <a href="#">Comisión Directiva</a>
            <a href="#">Socios</a>
          </div>
        </div>

        <a href="#">Servicios</a>
        <a href="#">Capacitación</a>
        <a href="#" className="btn-asociate">Asociate</a>
      </nav>
    </header>
  );

  */

