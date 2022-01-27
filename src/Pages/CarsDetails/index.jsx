import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import axios from 'axios';
import {
  Page,
  SConfiguration,
  Story,
  Advantage,
  Cloud,
  Battery,
  Euro,
  Emoji,
  FullBattery,
  Col,
  Container,
  BatteryHeader,
  EuroHeader,
  ConfigurationOfCars,
  Warranty,
} from './style';

export default function Configuration() {
  const { id } = useParams();
  const [cars, setCars] = useState([]);

  useEffect(async () => {
    axios.get(`/cars/${id}`).then(({ data }) => {
      setCars(data[0]);
    });
  }, []);

  return (
    <Page>
      <SConfiguration>
        <div className="row1">LE DETAIL DE VOTRE FUTUR VEHICULE</div>
        <div className="row2">
          <div className="col1">
            <BatteryHeader />
            <p>Une autonomie jusqu&apos;à ######</p>
          </div>
          <div className="col2">
            <img src={cars.image} alt="clio" />
            <p>
              {cars.brand}
              {cars.model}
            </p>
          </div>
          <div className="col1">
            <EuroHeader />
            <p>Gain d’argent de ######</p>
          </div>
        </div>
      </SConfiguration>
      <Story>
        <div className="col1">
          <h2>
            La Citadine à l&apos;épreuve du
            <p>temps</p>
          </h2>
          <p>Cette citadine présente depuis les</p>
          <p>années ######. Elle a su faire sa</p>
          <p> place dans le marché français.</p>
          <p>Présente en ######, elle peut</p>
          <p>maintenant être accessible en</p>
          <p> voiture éléctrique grâce à notre</p>
          <p>rétrofit.</p>
        </div>
        <div className="col2">
          <img src={cars.image} alt="clio" />
        </div>
      </Story>
      <Advantage>
        <h2>Caractéristique du véhicule</h2>
      </Advantage>
      <Container>
        <div className="Container">
          <Col>
            <div className="colLogo">
              <Cloud />
            </div>
            <div className="colText">
              -46% d&apos;émission de GAES* par rapport à l&apos;achat d&apos;un
              véhicule neuf*
            </div>
          </Col>
          <Col>
            <div className="colLogo">
              <Battery />
            </div>
            <div className="colText">
              Une recharge complète en 12h et 80% en 20 minutes sur borne de
              charge rapide
            </div>
          </Col>
          <Col>
            <div className="colLogo">
              <Euro />
            </div>
            <div className="colText">
              Plus économique que l&apos;achat d&apos;un véhicule électrique
            </div>
          </Col>
          <Col>
            <div className="colLogo">
              <Emoji />
            </div>
            <div className="ColText">
              Le confort de conduite d&apos;un véhicule électrique
            </div>
          </Col>
          <Col>
            <div className="colLogo">
              <FullBattery />
            </div>
            <div className="colText">Une autonomie jusqu&apos;à 350km</div>
          </Col>
        </div>
      </Container>
      <ConfigurationOfCars>
        <div>
          <h2>Configuration du véhicule</h2>
          <div>
            <p>GPS</p>
            <div>
              <label htmlFor="GPS">
                OUI <input type="checkbox" name="toto" />
              </label>
              <label htmlFor="GPS">
                NON <input type="checkbox" name="toto" />
              </label>
            </div>
          </div>
          <div>
            <p>VEHICULE</p>
            <label htmlFor="GPS">
              OUI, j’ai le véhicule <input type="checkbox" name="toto" />
            </label>
            <label htmlFor="GPS">
              NON, je n’ai pas le véhicule (+10 000€)
              <input type="checkbox" name="toto" />
            </label>
          </div>
          <div>
            <div>
              <p>AUTONOMIE</p>
              <select name="kilometer" id="kilometer">
                <option value="">Choisissez une option</option>
                <option value="200">200 Km</option>
                <option value="220">220 Km</option>
                <option value="240">240 Km</option>
                <option value="260">260 Km</option>
                <option value="280">280 Km</option>
                <option value="300">300 Km</option>
                <option value="320">320 Km</option>
                <option value="340">340 Km</option>
                <option value="360">360 Km</option>
                <option value="380">380 Km</option>
              </select>
            </div>
          </div>
        </div>
      </ConfigurationOfCars>
      <Warranty>
        <h2>Nos Garanties</h2>
        <p>Avant toute désinstallation de le partie thermique</p>
        <p>Une vérification de véhicule sera faite gratuitement afin de vous</p>
        <p>fournir un devis si des composants sont obsolètes.</p>
        <p>Notre système est garantie 2 ans.</p>
        <p>Premier contrôle à 5000 km gratuit.</p>
        <button className="pre-order" type="button">
          PRE-COMMANDE
        </button>
      </Warranty>
    </Page>
  );
}
