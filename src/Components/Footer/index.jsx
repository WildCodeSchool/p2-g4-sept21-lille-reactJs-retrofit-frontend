import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import {
  SFooter,
  Entree,
  CopyRight,
  MentionCategory,
  LogoContainer,
  CategoryContact,
  FcbIcon,
  InstaIcon,
  LastCategory,
  SocialNetwork,
  TwitterIcon,
  LkdinIcon,
  SavCategory,
} from './Style';
import Logo from './logo.png';

export default function Footer() {
  const [mail, setMail] = useState({
    email: '',
  });

  const handleChangeMail = (e) => {
    const newMail = { ...mail };
    newMail[e.target.name] = e.target.value;
    setMail(newMail);
  };

  const handleSubmitMail = (evt) => {
    evt.preventDefault();
    axios
      .post(`/mail`, mail)
      .then(() => {
        toast(
          `Demande d'informations prise en compte, nous vous répondrons dans les plus brefs délais`
        );
      })
      .catch(() => {
        toast('Saisie incorrecte');
      });
  };

  return (
    <SFooter>
      <LogoContainer>
        <Link to="/">
          <img src={Logo} alt="Logo EveRetrofit" />
        </Link>
        <ul>
          <li title="Coming Soon">Français</li>
          <li title="Coming Soon">Anglais</li>
        </ul>
      </LogoContainer>

      <Entree>
        <CategoryContact>
          <Link to="/renseignements" className="bla">
            <h2>Contacts</h2>
          </Link>
          <ul>
            <Link to="/renseignements">
              <li>Renseignements</li>
            </Link>
            <Link to="/partenariats">
              <li>Partenariats</li>
            </Link>
            <Link to="/nousrencontrer">
              <li>Nous rencontrer</li>
            </Link>
          </ul>
        </CategoryContact>

        <SavCategory>
          <Link to="/serviceclient">
            <h2>Service Client</h2>
          </Link>
          <ul>
            <Link to="/serviceclient">
              <li>Service Client</li>
            </Link>
            <Link to="/conseiltechnique">
              <li>Conseil Technique</li>
            </Link>
            <Link to="/sav">
              <li>SAV</li>
            </Link>
          </ul>
        </SavCategory>

        <MentionCategory>
          <Link to="/mentionsLegales">
            <h2>Mentions Légales</h2>
          </Link>

          <ul>
            <Link to="/mentionsLegales">
              <li>Mentions Légales</li>
            </Link>
            <Link to="/mentionsLegales">
              <li>CGV</li>
            </Link>
            <Link to="/mentionsLegales">
              <li>Politique de cookies</li>
            </Link>
            <Link to="/mentionsLegales">
              <li>EVeRetrofit SAS</li>
            </Link>
          </ul>
        </MentionCategory>

        <LastCategory>
          <p>Venez tester nos modèles:</p>
          <form onSubmit={handleSubmitMail}>
            <input
              name="email"
              value={mail.email}
              className="Search"
              type="search"
              placeholder="E-mail"
              onChange={handleChangeMail}
            />
            <input className="OkButton" type="submit" value="Ok" />
          </form>
          <ToastContainer />
          <SocialNetwork>
            <p>SUIVEZ-NOUS</p>
            <div>
              <FcbIcon />
              <InstaIcon />
              <LkdinIcon />
              <TwitterIcon />
            </div>
          </SocialNetwork>
        </LastCategory>
      </Entree>

      <CopyRight>
        <p>© CopyRight 2022 - EVeRetrofit</p>
      </CopyRight>
    </SFooter>
  );
}
