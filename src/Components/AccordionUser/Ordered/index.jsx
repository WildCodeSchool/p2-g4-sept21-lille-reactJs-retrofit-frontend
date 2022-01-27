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
// import titanic from '../../../Assets/titanic.jpg';

export default function Ordered() {
  // const data = [
  //   { statue: 1, pourcent: 12.5, title: 'Précommande' },
  //   { statue: 2, pourcent: 25, title: 'Kit en création' },
  //   { statue: 3, pourcent: 37.5, title: 'Kit homologué' },
  //   {
  //     statue: 4,
  //     pourcent: 50,
  //     title: 'Modele du véhicule en cours de création',
  //   },
  //   { statue: 5, pourcent: 62.5, title: 'Homologation' },
  //   { statue: 6, pourcent: 75, title: 'Transformation véhicule' },
  //   { statue: 7, pourcent: 87.5, title: 'Condition générale modifier' },
  //   { statue: 8, pourcent: 100, title: 'Véhicule prêt' },
  // ];enfi
  // const [res, setRes] = useSate();
  const [items, setItems] = useState([]);
  useEffect(async () => {
    await axios
      .get(`http://localhost:3031/order`)
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

  // function message(items) {
  //   let test = items.map((data) => {
  //     return data.progress;
  //   });
  //   let result = '';
  //   if (test === 12.5) {
  //     return (result = 'true');
  //   } else if (items.progress === 25) {
  //     return (result = 'false');
  //   }
  //   setRes.push(result);
  // }
  // message();

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
          {items.progress >= 1 ? (
            <p className="progressLabel">Vote Terminé !</p>
          ) : (
            <p className="progressLabel">{items.progress || 0} Votes / 30 </p>
          )}
        </Row2>
      </Content>
    </>
  );
}
