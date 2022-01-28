import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';
import {
  Content,
  Row,
  Row2,
  Units,
  Numbers,
  Col,
  Col2,
  Col3,
  Col4,
  Button,
  Btncontainer,
} from './style';

export default function Ordered() {
  const [items, setItems] = useState([]);
  useEffect(async () => {
    await axios
      .get(`/order`)
      .then(({ data }) => {
        const res = data.map((i) => {
          return {
            ...i,
            progress: (i.state / 8) * 100,
            finalprice: i.price * i.quantities,
          };
        });
        setItems(res);
        console.log(items);
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
        <Row>
          <Col>
            <img
              src={items.map((data) => {
                return data.image;
              })}
              alt="bateau"
            />
          </Col>
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
            <Numbers>
              <Col4>
                <p>
                  {items.map((data) => {
                    return data.brand;
                  })}
                </p>
              </Col4>
              <Col4>
                <p>
                  {items.map((data) => {
                    return data.model;
                  })}
                </p>
              </Col4>
              <Col4>
                <p>
                  {items.map((data) => {
                    return data.quantities;
                  })}
                </p>
              </Col4>
              <Col4>
                <p>
                  {items.map((data) => {
                    return data.finalprice;
                  })}
                </p>
              </Col4>
            </Numbers>
            <Btncontainer>
              <Button>Ajouter un commentaire</Button>
            </Btncontainer>
          </Col2>
        </Row>
        <Row2>
          <progress
            max="100"
            value={items.map((data) => {
              return data.progress;
            })}
            data-text="coucou"
          />
        </Row2>
      </Content>
    </>
  );
}
