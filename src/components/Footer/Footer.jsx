import { Link } from 'react-router-dom';
import {
  SFooter,
  Entree,
  CopyRight,
  SLogo,
  MentionCategory,
  List,
  ElementList,
  LogoContainer,
  CategoryContact,
  TitleCategory,
  FcbIcon,
  TitleMail,
  OkButton,
  Input,
  Form,
  InstaIcon,
  LastCategory,
  SocialNetwork,
  P,
  SLink,
  TwitterIcon,
  LkdinIcon,
  Icon,
  CategoryContainer,
  SavCategory,
} from './Style';
import Logo from './logo.png';

export default function Footer() {
  return (
    <SFooter>
      <Entree>
        <LogoContainer>
          <Link to="/">
            <SLogo src={Logo} alt="Logo EveRetrofit" />
          </Link>
          <List>
            <ElementList>Français</ElementList>
            <ElementList>Anglais</ElementList>
          </List>
        </LogoContainer>
        <CategoryContainer>
          <CategoryContact>
            <TitleCategory>Contacts</TitleCategory>
            <List>
              <SLink to="/inquiry">
                <ElementList>Renseignements</ElementList>
              </SLink>
              <SLink to="/partnership">
                <ElementList>Partenariats</ElementList>
              </SLink>
              <SLink to="/meet">
                <ElementList>Nous rencontrer</ElementList>
              </SLink>
            </List>
          </CategoryContact>
          <SavCategory>
            <TitleCategory>Service Client</TitleCategory>
            <List>
              <SLink to="/customerService">
                <ElementList>Service Client</ElementList>
              </SLink>
              <SLink to="/technicalService">
                <ElementList>Conseil Technique</ElementList>
              </SLink>
              <SLink to="/sav">
                <ElementList>SAV</ElementList>
              </SLink>
            </List>
          </SavCategory>
        </CategoryContainer>
        <CategoryContainer>
          <MentionCategory>
            <TitleCategory>Mentions Légales</TitleCategory>
            <List>
              <SLink to="/legalNotice">
                <ElementList>Mentions Légales</ElementList>
              </SLink>
              <SLink to="/cgv">
                <ElementList>CGV</ElementList>
              </SLink>
              <SLink to="/cookies">
                <ElementList>Politique de cookies</ElementList>
              </SLink>
              <SLink to="/sas">
                <ElementList>EVeRetrofit SAS</ElementList>
              </SLink>
            </List>
          </MentionCategory>
          <LastCategory>
            <TitleMail>Venez tester nos modèles:</TitleMail>
            <Form>
              <Input type="search" placeholder="E-mail" />
              <OkButton type="submit" value="Ok" />
            </Form>
          </LastCategory>
        </CategoryContainer>
      </Entree>
      <SocialNetwork>
        <P>SUIVEZ-NOUS</P>
        <Icon>
          <FcbIcon />
          <InstaIcon />
          <LkdinIcon />
          <TwitterIcon />
        </Icon>
      </SocialNetwork>
      <CopyRight>© CopyRight 2022 - EVeRetrofit</CopyRight>
    </SFooter>
  );
}
