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
          <li>Français</li>
          <li>Anglais</li>
        </ul>
      </LogoContainer>

      <Entree>
        <CategoryContact>
          <h2>Contacts</h2>
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
          <h2>Service Client</h2>
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
          <h2>Mentions Légales</h2>
          <ul>
            <Link to="/mentionslegales">
              <li>Mentions Légales</li>
            </Link>
            <Link to="/cgv">
              <li>CGV</li>
            </Link>
            <Link to="/cookies">
              <li>Politique de cookies</li>
            </Link>
            <Link to="/sas">
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
