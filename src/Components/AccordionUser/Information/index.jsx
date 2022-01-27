import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { useState } from 'react';
import { Content, Row, Row2, Button } from './style';

export default function Information() {
  const [informations, setInformations] = useState({
    lastname: '',
    firstname: '',
    phone: '',
    streetNumber: '',
    street: '',
    city: '',
    postalCode: '',
  });

  const handleChange = (evt) => {
    const newInformations = { ...informations };
    newInformations[evt.target.name] = evt.target.value;
    setInformations(newInformations);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`/`, informations)
      .then(() => {
        toast('Vos informations ont changer');
      })
      .catch((err) => {
        console.log(err);
      });
  };
  console.log(informations);
  return (
    <>
      <Content>
        <form onSubmit={handleSubmit}>
          <Row>
            <p>Nom :</p>
            <input
              type="search"
              name="firstname"
              value={informations.firstname}
              onChange={handleChange}
            />
            <p>Prénom :</p>
            <input
              type="search"
              name="lastname"
              value={informations.lastname}
              onChange={handleChange}
            />
            <p>Mobile :</p>
            <input
              type="search"
              name="phone"
              value={informations.phone}
              onChange={handleChange}
            />
            <Button>
              <input type="submit" value="Modifier" />
            </Button>
          </Row>
          <Row2>
            <p>N° :</p>
            <input
              type="search"
              name="streetNumber"
              value={informations.streetNumber}
              onChange={handleChange}
            />
            <p>Rue :</p>
            <input
              type="search"
              name="street"
              value={informations.street}
              onChange={handleChange}
            />
            <p>Ville :</p>
            <input
              type="search"
              name="city"
              value={informations.city}
              onChange={handleChange}
            />
            <p>Code postal :</p>
            <input
              type="search"
              name="postalCode"
              value={informations.postalCode}
              onChange={handleChange}
            />
          </Row2>
          <ToastContainer />
        </form>
      </Content>
    </>
  );
}
