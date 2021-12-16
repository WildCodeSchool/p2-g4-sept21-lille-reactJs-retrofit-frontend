import styled from 'styled-components';
import { FacebookSquare } from '@styled-icons/boxicons-logos/FacebookSquare';
import { Instagram } from '@styled-icons/boxicons-logos/Instagram';
import { Twitter } from '@styled-icons/entypo-social/Twitter';
import { LinkedinSquare } from '@styled-icons/boxicons-logos/LinkedinSquare';

export const SFooter = styled.footer`
  position: absolute;
  bottom: 0;
  background-color: #011e26;
  width: 100vw;
  height: 30vh;
  color: white;
  font-family: 'Josefin Sans', sans-serif;
  @media (max-width: 768px) {
    height: 70vh;
  }
`;

export const FcbIcon = styled(FacebookSquare)`
  height: 6vh;
  padding: 4px;
  @media (max-width: 768px) {
    height: 4vh;
  }
`;

export const LkdinIcon = styled(LinkedinSquare)`
  height: 6vh;
  padding: 4px;
`;

export const InstaIcon = styled(Instagram)`
  height: 6vh;
  padding: 4px;
`;

export const TwitterIcon = styled(Twitter)`
  height: 5.5vh;
  padding: 4px;
`;

export const Entree = styled.div`
  display: flex;
  justify-content: space-between;
  height: 13vh;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    height: 50vh;
  }
`;

export const CopyRight = styled.div`
  width: 100vw;
  height: 3vh;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  font-size: 13px;
  margin-bottom: 4px;
  position: absolute;
  bottom: 0;
`;

export const CategoryContainer = styled.div`
  width: 40vw;
  display: flex;
  justify-content: space-evenly;
  @media (max-width: 768px) {
    width: 100vw;
  }
`;

export const LogoContainer = styled.div`
  padding-left: 20px;
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    flex-direction: column;
    padding-left: 0px;
  }
`;

export const SLogo = styled.img`
  width: 14vw;
  margin-top: 18px;
  @media (max-width: 768px) {
    width: 25vw;
  }
`;

export const TitleCategory = styled.p`
  font-size: 20px;
  font-weight: bold;
  margin-top: 5px;
`;

export const TitleMail = styled.p`
  font-size: 20px;
  font-weight: bold;
  margin-top: 22px;
  margin-left: 12px;
  width: 15vw;
  padding-bottom: 10px;
`;

export const MentionCategory = styled.div`
  margin-top: 15px;
  font-size: 23px;
  width: 16vw;
  @media (max-width: 768px) {
    width: 50vw;
  }
`;

export const SavCategory = styled.div`
  margin-top: 15px;
  font-size: 23px;
  display: flex;
  flex-direction: column;
`;

export const CategoryContact = styled.div`
  margin-top: 15px;
  width: 10vw;
  @media (max-width: 768px) {
    width: 40vw;
  }
`;

export const List = styled.ul`
  font-size: 15px;
`;

export const ElementList = styled.li`
  padding: 8px 0 0 0;
  font-size: 17px;
`;

export const Link = styled.a`
  text-decoration: none;
`;

export const Form = styled.form`
  border: solid 2px rgb(0, 230, 200);
  display: flex;
  justify-content: flex-end;
  padding: 2px;
  height: 3vh;
`;

export const Input = styled.input`
  background-color: rgb(1, 30, 38);
  width: 12vw;
  height: 3vh;
  color: white;
  border: none;
  font-size: 16px;
  ::placeholder {
    color: white;
  }
`;

export const OkButton = styled.input`
  background-color: rgb(0, 230, 200);
  font-family: 'Josefin Sans', sans-serif;
  height: 3vh;
  border: none;
  cursor: pointer;
  border-radius: 3px;
  color: white;
`;

export const LastCategory = styled.div`
  display: flex;
  flex-direction: column;
  width: 20vw;
  height: 10vh;
  align-items: center;
  @media (max-width: 768px) {
    align-items: flex-start;
  }
`;

export const SocialNetwork = styled.div`
  width: 15vw;
  float: right;
  margin-right: 68.5px;
  margin-bottom: 50px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    border: 1px solid yellow;
    width: 100vw;
  }
`;

export const Icon = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    justify-content: space-evenly;
  }
`;

export const P = styled.p`
  padding: 2vh 0 1vh 0;
  text-align: center;
  font-size: 22px;
`;

export const SLink = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  &:hover {
    color: rgb(0, 230, 200);
  }
`;

export default {
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
  SLink,
  TwitterIcon,
  LkdinIcon,
  Icon,
  CategoryContainer,
  SavCategory,
};
