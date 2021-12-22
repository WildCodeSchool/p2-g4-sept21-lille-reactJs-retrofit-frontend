import { Link } from 'react-router-dom';
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
            <Link to="/nousrenconter">
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
          <form>
            <input className="Search" type="search" placeholder="E-mail" />
            <input className="OkButton" type="submit" value="Ok" />
          </form>
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
