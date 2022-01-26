import { useState, useEffect } from 'react';
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
import titanic from '../../../Assets/titanic.jpg';

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
  // ];

  const [items, setItems] = useState([]);
  const [progress, setProgress] = useState([]);
  useEffect(async () => {
    await axios
      .get(`http://localhost:3031/cars/0`)
      .then(({ data }) => {
        const res = data.map((i) => {
          return {
            ...i,
            progress: (i.availibleStatue / 8) * 100,
          };
        });
        setItems(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    const testprogress = () => {
      const res = items.map((i) => {
        return i.progress;
      });
      setProgress(res);
      console.log(res);
    };

    testprogress();
  }, []);

  console.log(progress);

  return (
    <>
      <Content>
        <Row>
          <Col>
            <img src={titanic} alt="bateau" />
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
                <p>Paquebot</p>
              </Col4>
              <Col4>
                <p>{items.model}</p>
              </Col4>
              <Col4>
                <p>1</p>
              </Col4>
              <Col4>
                <p>7,5 M €</p>
              </Col4>
            </Numbers>
            <Btncontainer>
              <Button>Ajouter un commentaire</Button>
            </Btncontainer>
          </Col2>
        </Row>
        <Row2>
          <progress max="100" value={progress} data-text="coucou" />
          <p className="progressLabel">Vote Terminé !</p>
        </Row2>
      </Content>
    </>
  );
}
