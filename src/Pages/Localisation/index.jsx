import { React, useEffect, useState } from 'react';
import axios from 'axios';
import Map from '../../Components/Map/index';
import { SContainer, SListAdress, SAdress } from './style';

function Localisation() {
  const [adressResults, setAdressResults] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3031/localisation`)
      .then(({ data }) => {
        setAdressResults(data);
      })
      .catch();
  }, []);
  return (
    <>
      <SContainer>
        <SListAdress>
          {adressResults.map((result) => {
            return (
              <SAdress>
                <h3>{[result.name]}</h3>
                <p>
                  Adresse: {[result.streetNumber]} {[result.street]}
                </p>
                <p>
                  {[result.postalCode]} {[result.city]}
                </p>
                <p>Téléphone: {[result.phone]}</p>
              </SAdress>
            );
          })}
        </SListAdress>
        <Map />
      </SContainer>
    </>
  );
}
export default Localisation;
