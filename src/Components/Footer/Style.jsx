import styled from 'styled-components';
import { FacebookSquare } from '@styled-icons/boxicons-logos/FacebookSquare';
import { Instagram } from '@styled-icons/boxicons-logos/Instagram';
import { Twitter } from '@styled-icons/entypo-social/Twitter';
import { LinkedinSquare } from '@styled-icons/boxicons-logos/LinkedinSquare';

const SFooter = styled.footer`
  bottom: 0;
  background-color: var(--color--secondary);
  width: 100vw;
  height: 30vh;
  color: var(--color--thirdary);
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 20px 20px 0 20px;
  @media (max-width: 768px) {
    height: 80vh;
    padding: 0;
  }
`;

const FcbIcon = styled(FacebookSquare)`
  height: 6vh;
  padding: 4px;
  @media (max-width: 768px) {
    height: 5.5vh;
  }
`;

const LkdinIcon = styled(LinkedinSquare)`
  height: 6vh;
  padding: 4px;
  @media (max-width: 768px) {
    height: 5.5vh;
  }
`;

const InstaIcon = styled(Instagram)`
  height: 6vh;
  padding: 4px;
  @media (max-width: 768px) {
    height: 5.5vh;
  }
`;

const TwitterIcon = styled(Twitter)`
  height: 5.5vh;
  padding: 4px;
  @media (max-width: 768px) {
    height: 4.5vh;
  }
`;

const Entree = styled.div`
  display: flex;
  justify-content: space-around;
  height: 10vh;
  width: 80vw;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    height: 60vh;
    margin-bottom: 18px;
  }
`;

const CopyRight = styled.div`
  width: 100vw;
  height: 3vh;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  font-size: 13px;
  margin-top: 50px;
  @media (max-width: 768px) {
    margin-top: -3.5vh;
    font-size: 10px;
  }
`;

const LogoContainer = styled.div`
  margin-left: 10px;

  @media (max-width: 768px) {
    display: flex;
    padding-top: 20px;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    margin-left: 0px;
    height: 18vh;
  }

  img {
    width: 14vw;
    display: flex;
    justify-content: center;
    @media (max-width: 768px) {
      width: 40vw;
    }
  }

  ul {
    font-size: 15px;
    padding-left: 0;
    line-height: 24px;
    list-style-type: none;
  }

  li {
    cursor: pointer;
    :hover {
      color: var(--color--primary);
    }
  }
`;

const MentionCategory = styled.section`
  margin-top: 7px;
  font-size: 23px;
  width: 15vw;
  height: 19vh;
  @media (max-width: 768px) {
    margin-right: 1px;
    width: 100vw;
    text-align: center;
  }

  ul {
    font-size: 15px;
    list-style-type: none;
    padding-left: 0;
    padding-top: 0;
    line-height: 9px;
    li {
      padding: 8px 0 0 0;
      font-size: 17px;
    }
  }

  h2 {
    font-size: 23px;
    font-weight: bold;
    margin-top: 5px;
    margin-bottom: -15px;
  }
`;

const SavCategory = styled.section`
  width: 15vw;
  height: 15vh;
  margin-top: 7px;
  font-size: 23px;
  @media (max-width: 768px) {
    width: 100vw;
    height: 5vh;
  }

  h2 {
    font-size: 23px;
    font-weight: bold;
    margin-top: 5px;
    margin-bottom: -15px;
    @media (max-width: 768px) {
      text-align: center;
    }
  }

  ul {
    font-size: 15px;
    list-style-type: none;
    padding-left: 0;
    padding-top: 0;
    line-height: 9px;
    @media (max-width: 768px) {
      display: none;
    }
  }

  li {
    padding: 8px 0 0 0;
    font-size: 17px;
  }
`;

const CategoryContact = styled.section`
  margin-top: 12px;
  width: 15vw;
  height: 15vh;
  @media (max-width: 768px) {
    height: 5vh;
    width: 100vw;
    margin-top: 0px;
  }

  h2 {
    font-size: 23px;
    font-weight: bold;
    margin-top: 5px;
    margin-bottom: -14px;
    @media (max-width: 768px) {
      text-align: center;
      margin-top: -5px;
    }
  }

  ul {
    font-size: 15px;
    list-style-type: none;
    padding-left: 0;
    padding-top: 0;
    line-height: 9px;
    @media (max-width: 768px) {
      display: none;
    }
    li {
      padding-top: 8px;
      font-size: 17px;
    }
  }
`;

const LastCategory = styled.section`
  display: flex;
  flex-direction: column;
  width: 15vw;
  height: 15vh;
  margin-top: 18px;
  align-items: center;
  @media (max-width: 768px) {
    margin: 0;
    height: 40vh;
    margin-top: 25px;
  }

  p {
    margin-top: 0px;
    font-size: 20px;
    font-weight: bold;
    width: 15vw;
    @media (max-width: 768px) {
      margin-left: 0px;
      font-size: 22px;
      text-align: center;
      width: 100vw;
      margin-top: 18px;
    }
  }

  form {
    border: solid 2px var(--color--primary);
    display: flex;
    justify-content: flex-end;
    padding: 2px;
    height: 4vh;
    @media (max-width: 768px) {
      width: 43vw;
    }
  }

  .Search {
    background-color: var(--color--secondary);
    width: 12vw;
    height: 3vh;
    color: var(--color--thirdary);
    border: none;
    font-size: 16px;
    @media (max-width: 768px) {
      width: 33vw;
    }
    ::placeholder {
      color: var(--color--thirdary);
    }
  }

  .OkButton {
    background-color: var(--color--primary);
    font-family: 'Josefin Sans', sans-serif;
    height: 3vh;
    border: none;
    cursor: pointer;
    border-radius: 3px;
    color: var(--color--secondary);
  }
  @media (max-width: 768px) {
    width: 35vw;
  }
`;

const SocialNetwork = styled.div`
  width: 15vw;
  height: 10vh;
  margin-right: 46px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    width: 70vw;
    float: none;
    margin-right: 0px;
    align-items: center;
  }

  p {
    margin-top: 2vh;
    padding: 2vh 0 0 0;
    text-align: center;
    font-weight: lighter;
  }

  div {
    display: flex;
    flex-wrap: wrap;
    margin-top: -19px;
    @media (max-width: 768px) {
      justify-content: space-evenly;
    }
  }
`;

export {
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
};
