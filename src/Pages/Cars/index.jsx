import axios from 'axios';
import { useEffect, useState } from 'react';

import VehiculeCard from '../../Components/VehiculeCard';
import SCarsView from './style';

function Véhicules() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    axios.get(`/cars`).then(({ data }) => {
      setCars(data);
    });
  }, []);
  return (
    <SCarsView>
      {cars.map((data) => {
        return <VehiculeCard {...data} />;
      })}
    </SCarsView>
  );
}

export default Véhicules;
