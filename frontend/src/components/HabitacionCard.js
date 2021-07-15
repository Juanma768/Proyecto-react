import React from 'react';
//BOOTSTRAP
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

import { Link } from 'react-router-dom';
/* 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'; */

export default function HabitacionCard({ habitacion, onReservaConfirmada }) {
  const imageUrl = `http://localhost:8000/imagenes/${habitacion.imagen}`;

  const cardImageStyle = {
    height: '40vh',
    objectFit: 'contain',
  };

  const handleReservarClick = (event) => {
    event.preventDefault();

    reservarHabitacion(habitacion.id);
  };

  async function reservarHabitacion(idHabitacion) {
    const url = 'http://localhost:8000/reservas';

    const dataReserva = {
      idHabitacion,
    };

    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(dataReserva),
      headers: { 'Content-Type': 'application/json' },
    });

    const data = await response.json();

    if (response.status === 200) {
      onReservaConfirmada();
    } else {
      alert(data.message);
    }

    console.log(data);
  }

  return (
    <Col className="my-4 text-center">
      <Link to={`/detail/${habitacion.id}`} className="nav-link">
        <Card className="h-100">
          <Card.Img style={cardImageStyle} variant="top" src={imageUrl} />

          <Card.Body>
            <Card.Title>{habitacion.estado}</Card.Title>
          </Card.Body>

          <Card.Footer className="text-muted">
            $ {habitacion.precio}
          </Card.Footer>

          <Row className="my-2">
            <Col>
              {habitacion.estado === 'Libre' && (
                <Button onClick={handleReservarClick}>Reservar</Button>
              )}
            </Col>
          </Row>

          {/* {props.type === 'mispublicaciones' && (
            <Row className="my-2">
              <Col>
                <Button variant="light" onClick={handleEditClick}>
                  <FontAwesomeIcon color="green" icon={faEdit} />
                </Button>

                <Button variant="light" onClick={handleDeleteClick}>
                  <FontAwesomeIcon color="red" icon={faTrash} />
                </Button>
              </Col>
            </Row>
          )} */}
        </Card>
      </Link>
    </Col>
  );
}
