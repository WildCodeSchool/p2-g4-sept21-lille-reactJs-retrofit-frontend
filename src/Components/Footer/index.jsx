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
  Li,
  TwitterIcon,
  LkdinIcon,
  Icon,
  CategoryContainer,
  SavCategory,
} from './style';
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
              <Li to="/inquiry">
                <ElementList>Renseignements</ElementList>
              </Li>
              <Li to="/partnership">
                <ElementList>Partenariats</ElementList>
              </Li>
              <Li to="/meet">
                <ElementList>Nous rencontrer</ElementList>
              </Li>
            </List>
          </CategoryContact>
          <SavCategory>
            <TitleCategory>Service Client</TitleCategory>
            <List>
              <Li to="/customerService">
                <ElementList>Service Client</ElementList>
              </Li>
              <Li to="/technicalService">
                <ElementList>Conseil Technique</ElementList>
              </Li>
              <Li to="/sav">
                <ElementList>SAV</ElementList>
              </Li>
            </List>
          </SavCategory>
        </CategoryContainer>
        <CategoryContainer>
          <MentionCategory>
            <TitleCategory>Mentions Légales</TitleCategory>
            <List>
              <Li to="/legalNotice">
                <ElementList>Mentions Légales</ElementList>
              </Li>
              <Li to="/cgv">
                <ElementList>CGV</ElementList>
              </Li>
              <Li to="/cookies">
                <ElementList>Politique de cookies</ElementList>
              </Li>
              <Li to="/sas">
                <ElementList>EVeRetrofit SAS</ElementList>
              </Li>
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
