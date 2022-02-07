import { React, useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import GarageIcon from 'Assets/pinV.png';
import HomeIcon from 'Assets/pinH.png';

import axios from 'axios';
import SContainerMap from './style';

const Garage = new L.Icon({
  iconUrl: GarageIcon,
  iconSize: [50, 50],
});
const Home = new L.Icon({
  iconUrl: HomeIcon,
  iconSize: [60, 60],
});

function Map() {
  const defaultLat = 47.227638;
  const defaultLong = 2.213749;
  const [mapResults, setMapResults] = useState([]);
  useEffect(() => {
    axios
      .get(`/localisation`)
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
              icon={result.type === 'port' ? Garage : Home}
              key={result.id}
            >
              <Popup>{[result.name]}</Popup>
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
