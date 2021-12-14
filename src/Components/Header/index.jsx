import { Link } from 'react-router-dom';
import { useState } from 'react';
import Searchbar from 'Components/SearchBar';
import {
  SHeader,
  Img,
  Col,
  Col2,
  Col3,
  Col4,
  Row,
  Row2,
  Ul,
  BlueHome,
  BlueUser,
  DropLogin,
  BlueBars,
} from './style';
import Logo from '../../Assets/Logo.png';

export default function Header() {
  const [style, setStyle] = useState({ display: 'none' });

  return (
    <>
      <SHeader>
        <Row>
          <Col>
            <Link to="/home">
              <Img src={Logo} alt="logo" />
            </Link>
          </Col>
          <Col2>
            <Ul>
              <Link to="/vehicules">Véhicules</Link>
              <Link to="/technologie">Technologie</Link>
              <Link to="/equipe">L&apos;équipe</Link>
              <Link to="/localisation">Localisation</Link>
              <Link to="/faq">FAQ</Link>
            </Ul>
          </Col2>
          <Col3>
            <Searchbar />
          </Col3>
          <Col4>
            <Link to="/home">
              <BlueHome />
            </Link>
            <BlueUser
              onMouseEnter={() => {
                setStyle({ display: 'block' });
              }}
              onMouseLeave={() => {
                setStyle({ display: 'none' });
              }}
            />
            <BlueBars />
          </Col4>
        </Row>
        <Row2
          onMouseEnter={() => {
            setStyle({ display: 'block' });
          }}
          onMouseLeave={() => {
            setStyle({ display: 'none' });
          }}
        >
          <DropLogin style={style}>inscription</DropLogin>
          <DropLogin style={style}>connexion</DropLogin>
        </Row2>
      </SHeader>
    </>
  );
}
