import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import garageIcon from 'Assets/garageBleu.svg';
import SContainerMap from './style';

const garage = new L.Icon({
  iconUrl: garageIcon,
  iconSize: [25, 25],
});
function Map() {
  const defaultLat = 46.227638;
  const defaultLong = 2.213749;

  return (
    <SContainerMap>
      <MapContainer
        center={[defaultLat, defaultLong]}
        zoom={5.5}
        scrollWheelZoom
      >
        <Marker position={[49.4268, 3.4268]} icon={garage}>
          <Popup>
            Vous etets ici <br /> Bienvenue a lille
          </Popup>
        </Marker>
        <Marker position={[49.4268, 4.4268]} icon={garage}>
          <Popup>
            Vous etets ici <br /> Bienvenue a lille
          </Popup>
        </Marker>
        <Marker position={[48.4268, 3.4268]} icon={garage}>
          <Popup>
            Vous etets ici <br /> Bienvenue a lille
          </Popup>
        </Marker>
        <Marker position={[50.4268, 3.4268]} icon={garage}>
          <Popup>
            Vous etets ici <br /> Bienvenue a lille
          </Popup>
        </Marker>

        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
      </MapContainer>
    </SContainerMap>
  );
}

export default Map;
