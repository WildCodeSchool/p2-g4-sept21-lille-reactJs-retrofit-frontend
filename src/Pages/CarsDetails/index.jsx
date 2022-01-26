import { useParams } from 'react-router-dom';
import Clio from '../../Assets/clio.png';
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
  const { name } = useParams();

  return (
    <Page>
      {name}
      <SConfiguration>
        {name}
        <div className="row1">LE DETAIL DE VOTRE FUTUR VEHICULE</div>
        <div className="row2">
          <BatteryHeader />
          <img src={Clio} alt="clio" />
          <EuroHeader />
        </div>
      </SConfiguration>
      <Story>
        <div>
          <h2>
            La Citadine à l&apos;épreuve du
            <p>temps</p>
          </h2>
          <p>Cette citadine présente depuis les</p>
          <p>années 2006. Elle a su faire sa</p>
          <p> place dans le marché français.</p>
          <p>Présente en hybride, elle peut</p>
          <p>maintenant être accessible en</p>
          <p> voiture éléctrique grâce à notre</p>
          <p>rétrofit.</p>
        </div>
      </Story>
      <Advantage>
        <h2>Caractéristique du véhicule</h2>
      </Advantage>
      <Container>
        <div className="container">
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
