import React, { useState, useEffect } from 'react';

import Row from 'react-bootstrap/Row';

import HabitacionCard from './HabitacionCard';

export default function HabitacionesList() {
  const [habitaciones, setHabitaciones] = useState([]);

  useEffect(() => {
    getHabitaciones();
  }, []);

  async function getHabitaciones() {
    const url = 'http://localhost:8000/habitaciones';

    const response = await fetch(url);
    const data = await response.json();

    setHabitaciones(data.data);
  }

  const handleReservaConfirmada = () => {
    getHabitaciones();
  };

  function renderHabitacionesCards() {
    const URL_IMAGENES = 'http://localhost:8000/imagenes';

    return habitaciones.map((habitacion) => (
      <HabitacionCard
        habitacion={habitacion}
        onReservaConfirmada={handleReservaConfirmada}
      />
    ));
  }

  return (
    <Row className="row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 row-cols-xl-6">
      {renderHabitacionesCards()}
    </Row>
  );
}
