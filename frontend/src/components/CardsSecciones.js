import React from 'react';
import CardInfo from './CardInfo';

import { Link } from 'react-router-dom';

export default function CardsSecciones() {
  return (
    <div className="row justify-content-between">

      <Link to="/habitaciones" className="text-decoration-none">
        <CardInfo nombre="Habitaciónes" className="col-3" />
      </Link>

      <Link to="/servicios" className="text-decoration-none">
        <CardInfo nombre="Servicios" className="col-3" />
      </Link>

      <Link to="/galeria" className="text-decoration-none">
        <CardInfo nombre="Galeria de Fotos" className="col-3" />
      </Link>

      <Link to="/ubicacion" className="text-decoration-none">
        <CardInfo nombre="Ubicación" className="col-3" />
      </Link>

    </div>
  );
}
