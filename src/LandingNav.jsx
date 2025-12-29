import { useState } from "react";

export default function LandingNav() {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="menu-item"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <span className="menu-title">Servicios</span>

      {open && (
        <div className="dropdown">
          <a href="#">Asesoramiento</a>
          <a href="#">Capacitaciones</a>
          <a href="#">Gestiones</a>
        </div>
      )}
    </div>
  );
}


