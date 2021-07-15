import React from 'react';
import './App.css';
import Navigatorbar from './components/Navigatorbar';
import Footer from './components/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';

/* import img1 from './assets/imagenes/habitacion1.jpg';
import img2 from './assets/imagenes/gym.jpg';
import img3 from './assets/imagenes/interior.jpg';
import img4 from './assets/imagenes/patio.jpg'; */


import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './components/Home';
import HabitacionesList from './components/HabitacionesList';
import ServiciosList from './components/ServiciosList';
import GaleriaFotos from './components/GaleriaFotos';
import UbicacionCard from './components/UbicacionCard';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Navigatorbar />

        <Switch>

          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/habitaciones">
            <HabitacionesList  />
          </Route>

          <Route exact path="/servicios">
            <ServiciosList  />
          </Route>

          <Route exact path="/galeria">
            <GaleriaFotos />
          </Route>

          <Route exact path="/ubicacion">
            <UbicacionCard />
          </Route>

        </Switch>

        <Footer />
      </BrowserRouter>

          

          {/*  <Route path="/mispublicaciones">
            <PubsList type="mispublicaciones" />
          </Route>

          <Route path="/favoritos">
            <PubsList type="favoritos" />
          </Route>

          <Route path="/detail/:id">
            <PubDetail />
          </Route> */}

          {/* <NotFound /> */}
        

       
    </>
  );
}
