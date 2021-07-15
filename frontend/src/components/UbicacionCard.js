import React from 'react';
import {Map} from 'react-leaflet';

const DEFAULT_LANGITUDE = -123;
const DEFAULT_LATITUDE = 48;

export default function UbicacionCard() {
    return (
        <Map center={[DEFAULT_LATITUDE, DEFAULT_LANGITUDE]} zoom={13} >
            
        </Map>
    )
}
