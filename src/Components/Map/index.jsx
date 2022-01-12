import { React, useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import garageIcon from 'Assets/garageBleu.svg';
import axios from 'axios';
import SContainerMap from './style';

const garage = new L.Icon({
  iconUrl: garageIcon,
  iconSize: [25, 25],
});
function Map() {
  const defaultLat = 47.227638;
  const defaultLong = 2.213749;
  const [mapResults, setMapResults] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:3031/localisation`)
      .then(({ data }) => {
        setMapResults(data);
      })
      .catch();
  }, []);

  return (
    <SContainerMap>
      <MapContainer
        center={[defaultLat, defaultLong]}
        zoom={5.5}
        scrollWheelZoom
      >
        {mapResults.map((result) => {
          return (
            <Marker
              position={[result.longitude, result.latitude]}
              icon={garage}
            >
              <Popup>
                Vous etets ici <br /> Bienvenue a {result.city}
              </Popup>
            </Marker>
          );
        })}
        ;
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
      </MapContainer>
    </SContainerMap>
  );
}

export default Map;
