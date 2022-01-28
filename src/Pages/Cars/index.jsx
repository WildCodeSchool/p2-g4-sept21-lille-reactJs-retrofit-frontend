import axios from 'axios';
import { useEffect, useState } from 'react';
import VehiculeCard from '../../Components/VehiculeCard';

import SCarsView from './style';

function Vehicules() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    axios.get(`/cars`).then(({ data }) => {
      setCars(data);
    });
  }, []);
  return (
    <SCarsView>
      {cars.map((data) => {
        return (
          <VehiculeCard
            model={data.model}
            image={data.image}
            price={data.price}
          />
        );
      })}
    </SCarsView>
  );
}

export default Vehicules;
