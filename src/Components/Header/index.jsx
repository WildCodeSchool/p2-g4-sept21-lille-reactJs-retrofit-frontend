import { Link } from 'react-router-dom';
import { useState } from 'react';
import Searchbar from 'Components/SearchBar';
import {
  SHeader,
  Row,
  Row2,
  BlueHome,
  BlueUser,
  DropLogin,
  BlueBars,
  Overlay,
} from './style';
import Logo from '../../Assets/Logo.png';

export default function Header() {
  const [style, setStyle] = useState({ display: 'none' });
  const [open, setOpen] = useState(false);

  const showMenu = () => {
    setOpen(!open);
  };

  const showLogin = () => {
    setStyle({ display: 'block' });
  };

  const hideLogin = () => {
    setStyle({ display: 'none' });
  };

  return (
    <SHeader>
      <Row>
        <div className="Col1">
          <Link to="/home">
            <img src={Logo} alt="logo" />
          </Link>
        </div>
        <div className="Col2">
          <ul>
            <Link to="/vehicules">Véhicules</Link>
            <Link to="/technologie">Technologie</Link>
            <Link to="/equipe">L&apos;équipe</Link>
            <Link to="/localisation">Localisation</Link>
            <Link to="/faq">FAQ</Link>
          </ul>
        </div>
        <div className="Col3">
          <Searchbar />
        </div>
        <div className="Col4">
          <Link to="/home">
            <BlueHome />
          </Link>
          <Link to="/connection">
            <BlueUser onMouseEnter={showLogin} onMouseLeave={hideLogin} />
          </Link>
          <BlueBars onClick={showMenu} />
        </div>
      </Row>
      <Row2 onMouseEnter={showLogin} onMouseLeave={hideLogin}>
        <DropLogin style={style}>inscription</DropLogin>
        <DropLogin style={style}>connexion</DropLogin>
      </Row2>
      {open && (
        <Overlay>
          <ul>
            <Link to="/vehicules">Véhicules</Link>
            <Link to="/technologie">Technologie</Link>
            <Link to="/equipe">L&apos;équipe</Link>
            <Link to="/localisation">Localisation</Link>
            <Link to="/faq">FAQ</Link>
          </ul>
        </Overlay>
      )}
    </SHeader>
  );
}
