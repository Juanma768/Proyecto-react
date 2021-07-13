import React from 'react';
import './App.css';
import Navigatorbar from './components/Navigatorbar';
import Carousel from './components/Carousel1';
import CardInfo from './components/CardInfo';
import Parallax from './components/Parallax'
import Footer from './components/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';

import img1 from './assets/imagenes/habitacion1.jpg';
import img2 from './assets/imagenes/gym.jpg';
import img3 from './assets/imagenes/interior.jpg';
import img4 from './assets/imagenes/patio.jpg';



export default function App() {
  return (
    <>
      <Navigatorbar/>
      <Carousel/>

      

      <div className='row justify-content-between' >
      <a className='text-decoration-none' href='#habitaciones'>
      <CardInfo  nombre='Habitaciónes' className='col-3'/>
      </a>
      <a className='text-decoration-none' href='#servicios'>
      <CardInfo  nombre='Servicios' className='col-3'/>
      </a>
      <a className='text-decoration-none' href='#galeria'>
      <CardInfo  nombre='Galeria de Fotos' className='col-3'/>
      </a>
      <a className='text-decoration-none' href='#ubicacion'>
      <CardInfo  nombre='Ubicación' className='col-3'/>
      </a>
      </div>
      <Parallax/>
      <Footer/>
    </>
  );
}
