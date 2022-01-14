import Clio from '../../Assets/clio.png';
// import Clio2 from '../../Assets/clio2.png';
import {
  SConfiguration,
  Story,
  Advantage,
  Cloud,
  Battery,
  Euro,
  Emoji,
  FullBattery,
  Contour,
  Container,
  BatteryHeader,
  EuroHeader,
  ConfigurationOfCars,
  Warranty,
} from './style';

export default function Configuration() {
  return (
    <div>
      <SConfiguration>
        <div className="Row1">LE DETAIL DE VOTRE FUTUR VEHICULE</div>

        <div className="Row2">
          <div className="BatteryLogo">
            <BatteryHeader />
          </div>
          <div className="BatteryText">
            Une autonomie
            <br /> jusqu&apos;a 150 Km
          </div>
          <div className="Picture">
            <img src={Clio} alt="clio" />
          </div>
          <div className="EuroLogo">
            <EuroHeader />
          </div>
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
          {/* <div className='Picture2'>
            <img src={Clio2} alt='clio' />
          </div> */}
        </div>
      </Story>

      <Advantage>
        <h2>Caractéristique du véhicule</h2>
      </Advantage>
      <Container>
        <div className="Container">
          <Contour>
            <div className="CloudLogo">
              <Cloud />
            </div>

            <div className="CloudText">
              61% d&apos;émission de GAES* <br />
              par rapport à l&apos;achat d&apos;un
              <br /> véhicule neuf*
            </div>
          </Contour>
          <Contour>
            <div className="FullBattery">
              <Battery />
            </div>
            <div className="Text">
              <p>
                Une recharge complète en
                <br />
                12h et 80% en 20 minutes
                <br />
                sur borne de charge rapide
              </p>
            </div>
          </Contour>
          <Contour>
            <div className="Logo">
              <Euro />
            </div>
            <div className="Text">
              Plus économique que
              <br />
              l&apos;achat d&apos;un véhicule
              <br />
              neuf
            </div>
          </Contour>
          <Contour>
            <div className="Logo">
              <Emoji />
            </div>
            <div className="Text">
              Le confor de conduite d&apos;un
              <br />
              véhicule électrique
            </div>
          </Contour>

          <Contour>
            <div className="Logo">
              <FullBattery />
            </div>
            <div className="Text">
              Une autonomie jusqu&apos;à
              <br />
              350km
            </div>
          </Contour>
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
    </div>
  );
}
