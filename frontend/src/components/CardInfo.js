import React from 'react'
//BOOTSTRAP
import Card from 'react-bootstrap/Card'
import img1 from '../assets/imagenes/habitacion1.jpg'

export default function CardInfo( props ) {
    return (
        <>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={img1} />
            <Card.Body>
                <Card.Title> {props.nombre} </Card.Title>
                <Card.Text>
               
                </Card.Text>
                
            </Card.Body>
            </Card>
        </>
    )
}
