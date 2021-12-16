import styled from 'styled-components';
import { FacebookSquare } from '@styled-icons/boxicons-logos/FacebookSquare';
import { Instagram } from '@styled-icons/boxicons-logos/Instagram';
import { Twitter } from '@styled-icons/entypo-social/Twitter';
import { LinkedinSquare } from '@styled-icons/boxicons-logos/LinkedinSquare';

const SFooter = styled.footer`
  position: absolute;
  bottom: 0;
  background-color: rgb(1, 30, 38);
  width: 100vw;
  height: 30vh;
  color: white;
  font-family: 'Josefin Sans', sans-serif;
  @media (max-width: 768px) {
    height: 70vh;
  }
`;

const FcbIcon = styled(FacebookSquare)`
  height: 6vh;
  padding: 4px;
  @media (max-width: 768px) {
    height: 4vh;
  }
`;

const LkdinIcon = styled(LinkedinSquare)`
  height: 6vh;
  padding: 4px;
  @media (max-width: 768px) {
    height: 4vh;
  }
`;

const InstaIcon = styled(Instagram)`
  height: 6vh;
  padding: 4px;
  @media (max-width: 768px) {
    height: 4vh;
  }
`;

const TwitterIcon = styled(Twitter)`
  height: 5.5vh;
  padding: 4px;
  @media (max-width: 768px) {
    height: 3.5vh;
  }
`;

const Entree = styled.div`
  display: flex;
  justify-content: space-between;
  height: 13vh;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    height: 50vh;
  }
`;

const CopyRight = styled.div`
  width: 100vw;
  height: 3vh;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  font-size: 13px;
  margin-bottom: 10px;
  position: absolute;
  bottom: 0;
`;

const CategoryContainer = styled.div`
  width: 40vw;
  display: flex;
  justify-content: space-evenly;
  @media (max-width: 768px) {
    width: 100vw;
    justify-content: space-around;
  }
`;

const LogoContainer = styled.div`
  padding-left: 20px;
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    flex-direction: column;
    padding-left: 0px;
  }
`;

const SLogo = styled.img`
  width: 14vw;
  margin-top: 18px;
  @media (max-width: 768px) {
    width: 40vw;
  }
`;

const TitleCategory = styled.p`
  font-size: 20px;
  font-weight: bold;
  margin-top: 5px;
`;

const TitleMail = styled.p`
  font-size: 20px;
  font-weight: bold;
  margin-top: 22px;
  margin-left: 12px;
  width: 15vw;
  padding-bottom: 10px;
  @media (max-width: 768px) {
    margin-left: 0px;
    font-size: 20px;
    width: 25vw;
    margin-top: 18px;
  }
`;

const MentionCategory = styled.div`
  margin-top: 15px;
  font-size: 23px;
  width: 16vw;
  @media (max-width: 768px) {
    margin-right: 1px;
    width: 45vw;
  }
`;

const SavCategory = styled.div`
  margin-top: 15px;
  font-size: 23px;
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    width: 45vw;
  }
`;

const CategoryContact = styled.div`
  margin-top: 15px;
  width: 10vw;
  @media (max-width: 768px) {
    width: 45vw;
  }
`;

const List = styled.ul`
  font-size: 15px;
`;

const ElementList = styled.li`
  padding: 8px 0 0 0;
  font-size: 17px;
`;

const Form = styled.form`
  border: solid 2px rgb(0, 230, 200);
  display: flex;
  justify-content: flex-end;
  padding: 2px;
  height: 3vh;
  @media (max-width: 768px) {
    width: 43vw;
  }
`;

const Input = styled.input`
  background-color: rgb(1, 30, 38);
  width: 12vw;
  height: 3vh;
  color: white;
  border: none;
  font-size: 16px;
  ::placeholder {
    color: white;
  }
  @media (max-width: 768px) {
    width: 35vw;
  }
`;

const OkButton = styled.input`
  background-color: rgb(0, 230, 200);
  font-family: 'Josefin Sans', sans-serif;
  height: 3vh;
  border: none;
  cursor: pointer;
  border-radius: 3px;
  color: white;
`;
const LastCategory = styled.div`
  display: flex;
  flex-direction: column;
  width: 30vw;
  height: 10vh;
  align-items: center;
  @media (max-width: 768px) {
    align-items: flex-start;
    flex-wrap: wrap;
    height: 20vh;
    width: 45vw;
  }
`;

const SocialNetwork = styled.div`
  width: 15vw;
  float: right;
  margin-right: 68.5px;
  margin-bottom: 50px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    width: 70vw;
    margin: auto;
    float: none;
    margin-top: 1vh;
    flex-direction: column;
  }
`;

const Icon = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    justify-content: space-evenly;
  }
`;

const P = styled.p`
  padding: 2vh 0 1vh 0;
  text-align: center;
  font-size: 22px;
`;

const Li = styled.a`
  text-decoration: none;
  cursor: pointer;
  &:hover {
    color: rgb(0, 230, 200);
  }
`;

export {
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
  Input,
  Form,
  OkButton,
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
};
