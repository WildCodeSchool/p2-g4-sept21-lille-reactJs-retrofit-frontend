import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import OrderCard from 'Components/OrderCard';
import { toast } from 'react-toastify';
import axios from 'axios';
import { Content, Units, Col2, Col3, Button, Btncontainer } from './style';

export default function Ordered() {
  const [items, setItems] = useState([]);
  const userStorage = { id: useSelector((state) => state.id) };
  console.log(items);

  useEffect(async () => {
    await axios
      .post(`/order/preorder`, userStorage)
      .then(({ data }) => {
        const res = data.map((i) => {
          return {
            ...i,
            progress: (i.state / 8) * 100,
            finalprice: i.price * i.quantities,
          };
        });
        setItems(res);
      })
      .catch(() => {
        toast.error('Pas de commandes en cours !', {
          position: 'top-center',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  }, []);

  return (
    <>
      <Content>
        <Col2>
          <Units>
            <Col3>
              <p>Marque</p>
            </Col3>
            <Col3>
              <p>Modèle</p>
            </Col3>
            <Col3>
              <p>Quantités</p>
            </Col3>
            <Col3>
              <p>Prix</p>
            </Col3>
          </Units>
          <>
            {items.map((item) => {
              return <OrderCard {...item} />;
            })}
          </>
          <Btncontainer>
            <Button>Ajouter un commentaire</Button>
          </Btncontainer>
        </Col2>
      </Content>
    </>
  );
}
