import React from 'react'
//BOOTSTRAP
import Carousel from 'react-bootstrap/Carousel'

import img1 from '../assets/imagenes/hotel.jpg'
import img2 from '../assets/imagenes/interior.jpg'
import img3 from '../assets/imagenes/patio.jpg'

export default function Carousel1() {
    return (
        <>
            <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={img1}
                alt="First slide"
                />
                <Carousel.Caption>
                <h3></h3>
                <p></p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={img2}
                alt="Second slide"
                />

                <Carousel.Caption>
                <h3></h3>
                <p></p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={img3}
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3></h3>
                <p></p>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel> 
        </>
    )
}
