import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Content, Row, Row2, Button } from './style';

export default function Information() {
  const {
    id,
    lastname,
    firstname,
    phone,
    streetNumber,
    street,
    city,
    postalCode,
  } = useSelector((state) => state);
  const [informations, setInformations] = useState({
    lastname,
    firstname,
    phone,
    streetNumber,
    street,
    city,
    postalCode,
  });
  const dispatch = useDispatch();
  // const { id } = useParams();

  const handleChange = (evt) => {
    const newInformations = { ...informations };
    newInformations[evt.target.name] = evt.target.value;
    setInformations(newInformations);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`/profile/${id}`, informations)
      .then((response) => {
        const user = response.data;
        dispatch({ type: 'LOGGEDIN', user });
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
            <Button type="submit">Modifier</Button>
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
