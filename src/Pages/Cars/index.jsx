import axios from 'axios';
import { useEffect, useState } from 'react';

import VéhiculeCard from '../../Components/VéhiculeCard';
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
        return (
          <VéhiculeCard
            model={data.model}
            image={data.image}
            price={data.price}
          />
        );
      })}
    </SCarsView>
  );
}

export default Véhicules;
