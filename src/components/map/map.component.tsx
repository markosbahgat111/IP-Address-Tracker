import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import './map.scss';
import { ILocation } from '../../model/location.model';
import { useEffect } from 'react';

interface Props {
  data:ILocation| null
}

const MapComponent: React.FC<Props> = ({ data }) => {
  useEffect(() => {},[data?.location.lat])
  return (
    <MapContainer center={[data ? data.location.lat : 37.38605, data ? data.location.lng : -122.08385]} zoom={3}>
        <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[data ? data.location.lat : 31.245, data? data.location.lng : -1.325]}>
        <Popup>
          {data?.location.city}, {" " + data?.location.region}.<br />
          {data?.location.geonameId}.
        </Popup>
        </Marker>
    </MapContainer>
  )
}

export default MapComponent;