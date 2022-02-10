import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import OrderCard from 'Components/OrderCard';
import { toast } from 'react-toastify';
import axios from 'axios';
import { Content, Button, Btncontainer } from './style';

export default function Ordered() {
  const [items, setItems] = useState([]);
  const userStorage = { id: useSelector((state) => state.id) };

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
        <>
          {items.map((item) => {
            return <OrderCard {...item} key={item.key} />;
          })}
        </>
        <Btncontainer>
          <Button>Ajouter un commentaire</Button>
        </Btncontainer>
      </Content>
    </>
  );
}
