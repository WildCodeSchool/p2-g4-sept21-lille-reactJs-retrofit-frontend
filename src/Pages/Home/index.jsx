import Carousel from 'Components/Carousel';
import Cars from 'Assets/ds3.png';
import Bge from 'Assets/bge.png';
import Clap from 'Assets/Clap.png';
import Creinov from 'Assets/creinov.png';
import HEV from 'Assets/HEV.png';
import L2EP from 'Assets/l2ef.png';
import MEL from 'Assets/mel_logo.png';

import HDF from 'Assets/regionhdf.png';
import Transalley from 'Assets/transalley.png';
import UnivLille1 from 'Assets/univlille1.png';
import LogoWild from 'Assets/wildcodeschool.png';
import {
  MainContainer,
  Cloud,
  Container,
  Battery,
  Euro,
  Emoji,
  FullBattery,
  Col,
  Headline,
  RowHeadline,
  TextArea,
  VoteContainer,
  HomeContainer,
  Rating,
  PartnerContainer,
  News,
} from './style';

export default function Home() {
  return (
    <>
      <HomeContainer>
        <MainContainer>
          <RowHeadline>
            <Headline>
              <p>
                <span>EVeR</span>etrofit,
              </p>
              <p>votre voiture,</p>
              <p>
                pour <span>toujours</span>
              </p>
              <p className="subHeadline">
                Vous êtes attaché à votre véhicule mais il est désormais trop
                polluant ? Trop chère à entretenir ? Le prix du carburant
                classique est trop élevé ? Nous avons la solution !
              </p>
            </Headline>

            <img src={Cars} alt="Une voiture" />
          </RowHeadline>
          <Container>
            <div className="Row1"> Le retrofit c&apos;est :</div>
            <div className="Row2">
              <Col>
                <div className="ColLogo">
                  <Cloud />
                </div>

                <div className="ColText">
                  -46% d&apos;émission de GAES* par rapport à l&apos;achat
                  d&apos;un véhicule neuf*
                </div>
              </Col>

              <Col>
                <div className="ColLogo">
                  <Battery />
                </div>
                <div className="ColText">
                  Une recharge complète en 12h et 80% en 20 minutes sur borne de
                  charge rapide
                </div>
              </Col>

              <Col>
                <div className="ColLogo">
                  <Euro />
                </div>
                <div className="ColText">
                  Plus économique que l&apos;achat d&apos;un véhicule électrique
                </div>
              </Col>

              <Col>
                <div className="ColLogo">
                  <Emoji />
                </div>
                <div className="ColText">
                  Le confort de conduite d&apos;un véhicule électrique
                </div>
              </Col>

              <Col>
                <div className="ColLogo">
                  <FullBattery />
                </div>
                <div className="ColText">Une autonomie jusqu&apos;à 350km</div>
              </Col>
            </div>
          </Container>
        </MainContainer>

        <TextArea>
          <p>
            Autorisé en France depuis avril 2020, le rétrofit commence de plus
            en plus à trouver sa place sur le marché français.
          </p>
          <p>
            Se ballader dans une voiture ancienne en centre ville ? <br />
            Faire des économies continuellement dès que vous prenez la route ?
            <br />
            Recharger votre véhicule le soir chez vous comme vous le feriez avec
            un téléphone ? <br /> Oublier le bruit des vibrations et adopter une
            conduite plus plaisante. <br />
            Gardez votre véhicule avec qui vous avez passé tellement de bon et
            mauvais moment ?
          </p>
          <p>
            Tout cela est possible grâce au rétrofit. Mais le rétrofit
            c&apos;est quoi ? C&apos;est tout simplement la transoformation
            d&apos;un véhicule thermique en électrique. Ainsi, vous pouvez
            continuer de rouler avec style dans vote véhicule,mais en émettant
            0g de CO2/km.
          </p>
        </TextArea>

        <VoteContainer>
          <h1>Votez pour le prochain véhicule à rétrofiter !</h1>
          <div className="VoteCardContainer">
            <div className="VoteCard" />
            <div className="VoteCard" />
            <div className="VoteCard" />
          </div>
        </VoteContainer>

        <News>
          <h2>Actualités sur les véhicules électriques</h2>
          <div className="NewsCardContainer">
            <div className="NewsCard" />
            <div className="NewsCard" />
            <div className="NewsCard" />
            <div className="NewsCard" />
            <div className="NewsCard" />
            <div className="NewsCard" />
          </div>
        </News>
        <Rating>
          <Carousel />
        </Rating>
        <PartnerContainer>
          <p>Ils nous font confiance</p>
          <div>
            <img src={Bge} alt="Logo d'un Partenaire" />
            <img src={Clap} alt="Logo d'un Partenaire" />
            <img src={Creinov} alt="Logo d'un Partenaire" />
            <img src={HEV} alt="Logo d'un Partenaire" />
            <img src={L2EP} alt="Logo d'un Partenaire" />
            <img src={MEL} alt="Logo d'un Partenaire" />
            <img src={HDF} alt="Logo d'un Partenaire" />
            <img src={Transalley} alt="Logo d'un Partenaire" />
            <img src={UnivLille1} alt="Logo d'un Partenaire" />
            <img src={LogoWild} alt="Logo d'un Partenaire" />
          </div>
        </PartnerContainer>
      </HomeContainer>
    </>
  );
}
