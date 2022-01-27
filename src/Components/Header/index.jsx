import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Cookies from 'universal-cookie';
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
  Gears,
} from './style';
import Logo from '../../Assets/Logo.png';

export default function Header() {
  const [style, setStyle] = useState({ display: 'none' });
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const firstname = useSelector((state) => state.firstname);
  const isLogged = useSelector((state) => state.isLogged);
  const isAdmin = useSelector((state) => state.isAdmin);

  const showMenu = () => {
    setOpen(!open);
  };

  const showLogin = () => {
    setStyle({ display: 'block' });
  };

  const hideLogin = () => {
    setStyle({ display: 'none' });
  };
  const Loggout = () => {
    const cookies = new Cookies();
    cookies.remove('user_token');
    dispatch({ type: 'LOGGOUT' });
  };

  return (
    <SHeader>
      <Row>
        <div className="Col1">
          <Link to="/">
            <img src={Logo} alt="logo" />
          </Link>
        </div>
        <div className="Col2">
          <ul>
            <Link onCLick={showMenu} to="/vehicules">
              Véhicules
            </Link>
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
          {isAdmin && (
            <a href="http://localhost:3010/#/">
              <Gears />
            </a>
          )}
          <Link to="/">
            <BlueHome />
          </Link>
          <Link to="/">
            <BlueUser onMouseEnter={showLogin} onMouseLeave={hideLogin} />
          </Link>
          <BlueBars onClick={showMenu} />
        </div>
      </Row>
      <Row2 onMouseEnter={showLogin} onMouseLeave={hideLogin}>
        {isLogged ? (
          <>
            <DropLogin
              style={style}
              onClick={() => {
                dispatch({ type: 'OPENSIGNUP' });
              }}
            >
              <Link to="/profile">{firstname}</Link>
            </DropLogin>
            <DropLogin style={style} onClick={Loggout}>
              deconnexion
            </DropLogin>
          </>
        ) : (
          <>
            <DropLogin style={style}>
              <Link to="/register">inscription</Link>
            </DropLogin>

            <DropLogin
              style={style}
              onClick={() => {
                dispatch({ type: 'OPENSIGNIN' });
              }}
            >
              connexion
            </DropLogin>
          </>
        )}
      </Row2>
      {open && (
        <Overlay
          onClick={() => {
            showMenu();
          }}
        >
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
