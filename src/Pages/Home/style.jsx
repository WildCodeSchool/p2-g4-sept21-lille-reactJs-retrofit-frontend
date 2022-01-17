import styled, { keyframes } from 'styled-components';
import { CloudSlash } from '@styled-icons/bootstrap/CloudSlash';
import { BatteryCharging } from '@styled-icons/bootstrap/BatteryCharging';
import { CurrencyEuro } from '@styled-icons/bootstrap/CurrencyEuro';
import { EmojiSunglasses } from '@styled-icons/bootstrap/EmojiSunglasses';
import { BatteryFull } from '@styled-icons/bootstrap/BatteryFull';

const Cloud = styled(CloudSlash)`
  color: var(--color--primary);
  width: 80px;
  margin: 10px;
`;

const Battery = styled(BatteryCharging)`
  color: var(--color--primary);
  width: 80px;
  margin: 10px 10px 0 10px;
`;

const Euro = styled(CurrencyEuro)`
  color: var(--color--primary);
  width: 80px;
  margin: 0 0 10px 0;
`;

const Emoji = styled(EmojiSunglasses)`
  color: var(--color--primary);
  width: 80px;
  margin: 0 0 10px 0;
`;

const FullBattery = styled(BatteryFull)`
  color: var(--color--primary);
  width: 80px;
  margin: 0 0 10px 0;
`;

const HomeContainer = styled.div`
  height: 100%;
  div.TextArea {
    margin: 40px 20%;
    display: flex;
    flex-direction: column;
    text-align: start;
    font-size: 20px;
    line-height: 1.4em;

    p {
      font-size: 24px;
      margin: 10px;
      text-align: start;
    }
  }
`;

const MainContainer = styled.div`
  margin-top: 75px;
  padding-top: 95px;
  background: rgb(1, 30, 38);
  background: linear-gradient(
    180deg,
    rgba(1, 30, 38, 1) 0%,
    rgba(10, 38, 46, 0.8909512761020881) 34%,
    rgba(54, 77, 84, 0.839907192575406) 62%,
    rgba(255, 255, 255, 0.48259860788863107) 100%
  );
`;

const animationCars = keyframes`
  from {
    transform: translateX(100px);
    opacity: 0;
  }

  to {
    transform: translateX(0px);
    opacity: 1;
  }
`;

const animationTexte = keyframes`
  from {
    transform: translateY(20px);
    opacity: 0;
  }

  to {
    transform: translateY(0px);
    opacity: 1;
  }
`;

const RowHeadline = styled.div`
  margin: 3% 20% 50px 20%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 80vh;
  img {
    height: 600px;
    animation: ${animationCars} 1s linear;
    @media only screen and (max-width: 1200px) {
      display: none;
    }
  }

  @media only screen and (max-width: 1200px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`;

const Headline = styled.div`
  height: 500px;
  font-size: 50px;
  color: var(--color--thirdary);
  display: flex;
  flex-direction: column;
  width: 300px;
  animation: ${animationTexte} 1s linear;
  p {
    margin: 0;
  }

  span {
    color: var(--color--primary);
  }

  p.subHeadline {
    margin: 2.4em 0;
    font-size: 24px;
    line-height: 1.4em;
  }

  @media only screen and (max-width: 1200px) {
    justify-content: center;
    align-items: center;
  }

  @media only screen and (max-width: 768px) {
    justify-content: center;
    align-items: center;
  }
`;

const Container = styled.div`
  margin: 100px 20% 0px 20%;
  padding: 20px;
  background: var(--color--secondary);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  border: solid 2px var(--color--primary);
  color: white;
  div.Row1 {
    font-size: 30px;
    font-weight: 1000;
  }

  div.Row2 {
    display: flex;
    align-items: center;
    @media only screen and (max-width: 1200px) {
      flex-direction: column;
    }
  }

  @media only screen and (max-width: 1200px) {
    text-align: center;
    font-size: 40px;
    margin: 100px 15% 50px 15%;
    justify-content: center;
    align-items: center;
  }
`;

const Col = styled.div`
  font-size: 20px;
  text-align: center;
  width: 100%;
  div.ColText {
    padding: 20px 20px 0 20px;
  }
  @media only screen and (max-width: 1200px) {
    padding: 10px 0 0 0;
    font-size: 25px;
  }
`;

const VoteContainer = styled.div`
  margin: 0 0 2% 0;
  padding: 10px;
  background: var(--color--secondary);
  color: var(--color--thirdary);
  text-align: center;

  h1 {
    font-size: 40px;
    margin-top: 20px;
    margin-bottom: 10px;
  }

  div.VoteCardContainer {
    padding: 0 10% 1% 10%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
`;

const News = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 5% 0 5%;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  width: 70vw;
  margin-right: 15vw;
  margin-left: 15vw;
  h2 {
    width: 100vw;
    font-size: 35px;
    text-align: center;
    margin-top: 10px;
    margin-bottom: 20px;
  }
`;

const Rating = styled.div`
  margin: 0;
  width: 100vw;
  height: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const PartnerContainer = styled.div`
  padding: 0 15% 0 15%;
  margin: 0 0 100px 0;
  font-size: 30px;
  width: 100vw;
  display: flex;
  flex-direction: column;

  h2 {
    border-top: 1px solid #bdc3c7;
    margin: 0 20% 100px 20%;
    padding: 20px 0 10px 0;
    font-size: 30px;
    text-align: center;
    @media only screen and (max-width: 800px) {
      margin: 0;
    }
  }

  img {
    margin: 20px;
    width: 200px;
  }
  div {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    @media only screen and (max-width: 800px) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
`;

export {
  MainContainer,
  Cloud,
  Battery,
  Euro,
  Container,
  Emoji,
  FullBattery,
  Headline,
  Col,
  RowHeadline,
  VoteContainer,
  News,
  HomeContainer,
  Rating,
  PartnerContainer,
};
