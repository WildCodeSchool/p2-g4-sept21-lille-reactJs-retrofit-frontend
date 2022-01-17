import Carousel from 'Components/Carousel';
import Cars from 'Assets/ds3.png';
import Bge from 'Assets/bge.png';
import Clap from 'Assets/clap.png';
import Creinov from 'Assets/creinnov.png';
import HEV from 'Assets/hive.png';
import L2EP from 'Assets/l2ep.png';
import MEL from 'Assets/MEL.png';
import HDF from 'Assets/hauts-de-france.png';
import Transalley from 'Assets/transalley.png';
import UnivLille1 from 'Assets/univ.png';
import LogoWild from 'Assets/wcs.png';
import NewsCard from 'Components/NewsCard';
import VoteCard from 'Components/VoteCard';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

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
  VoteContainer,
  HomeContainer,
  Rating,
  PartnerContainer,
  News,
} from './style';

const news = [
  {
    id: 1,
    image:
      'https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5d35eacaf1176b0008974b54%2F2020-Chevrolet-Corvette-Stingray%2F960x0.jpg',
    content:
      'Avec le développement de la voiture électrique, c’est tout un écosystème qui se met en place dans notre société ...',
    source: 'https://www.autonews.fr/',
  },
  {
    id: 2,
    image:
      'https://assets.greentechmedia.com/assets/content/cache/made/assets/content/cache/remote/https_assets.greentechmedia.com/content/images/articles/Electric_Car_Concept_XL_721_420_80_s_c1.jpg',
    content:
      'Avec le développement de la voiture électrique, c’est tout un écosystème qui se met en place dans notre société ...',
    source: 'https://www.autonews.fr/',
  },
  {
    id: 3,
    image:
      'https://i.guim.co.uk/img/media/cd2b6f1b13f7d2d21f4ba679a8a4db3990a54d79/0_152_4595_2758/master/4595.jpg?width=620&quality=45&auto=format&fit=max&dpr=2&s=f5edbce9c3889df46aaede677657830a',
    content:
      'Avec le développement de la voiture électrique, c’est tout un écosystème qui se met en place dans notre société ...',
    source: 'https://www.autonews.fr/',
  },
  {
    id: 4,
    image:
      'https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5d35eacaf1176b0008974b54%2F2020-Chevrolet-Corvette-Stingray%2F960x0.jpg',
    content:
      'Avec le développement de la voiture électrique, c’est tout un écosystème qui se met en place dans notre société ...',
    source: 'https://www.autonews.fr/',
  },
  {
    id: 5,
    image:
      'https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5d35eacaf1176b0008974b54%2F2020-Chevrolet-Corvette-Stingray%2F960x0.jpg',
    content:
      'Avec le développement de la voiture électrique, c’est tout un écosystème qui se met en place dans notre société ...',
    source: 'https://www.autonews.fr/',
  },
  {
    id: 6,
    image:
      'https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5d35eacaf1176b0008974b54%2F2020-Chevrolet-Corvette-Stingray%2F960x0.jpg',
    content:
      'Avec le développement de la voiture électrique, c’est tout un écosystème qui se met en place dans notre société ...',
    source: 'https://www.autonews.fr/',
  },
];

export default function Home() {
  const [topCars, setTopCars] = useState([]);

  useEffect(async () => {
    axios
      .get(`http://localhost:3031/cars`)
      .then(({ data }) => {
        setTopCars(data.slice(0, 3));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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

        <div className="TextArea">
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
        </div>
        <Link to="/vote">
          <VoteContainer>
            <h1>Votez pour le prochain véhicule à rétrofiter !</h1>
            <div className="VoteCardContainer">
              {topCars.map((car) => {
                return <VoteCard {...car} />;
              })}
            </div>
          </VoteContainer>
        </Link>
        <News>
          <h2>Actualités sur les véhicules électriques</h2>
          <div className="NewsCardContainer">
            {news.map((article) => {
              return <NewsCard {...article} />;
            })}
          </div>
        </News>
        <Rating>
          <Carousel />
        </Rating>
        <PartnerContainer>
          <h2>Ils nous font confiance</h2>
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
