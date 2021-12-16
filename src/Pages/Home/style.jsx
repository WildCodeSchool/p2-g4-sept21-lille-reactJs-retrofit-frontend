import styled from 'styled-components';
import { CloudSlash } from '@styled-icons/bootstrap/CloudSlash';
import { BatteryCharging } from '@styled-icons/bootstrap/BatteryCharging';
import { CurrencyEuro } from '@styled-icons/bootstrap/CurrencyEuro';
import { EmojiSunglasses } from '@styled-icons/bootstrap/EmojiSunglasses';
import { BatteryFull } from '@styled-icons/bootstrap/BatteryFull';

const Cloud = styled(CloudSlash)`
  color: var(--color--secondary);
  width: 80px;
`;

const Battery = styled(BatteryCharging)`
  color: var(--color--secondary);
  width: 80px;
`;

const Euro = styled(CurrencyEuro)`
  color: var(--color--secondary);
  width: 80px;
`;

const Emoji = styled(EmojiSunglasses)`
  color: var(--color--secondary);
  width: 80px;
`;

const FullBattery = styled(BatteryFull)`
  color: var(--color--secondary);
  width: 80px;
`;
const RowLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Headline = styled.p`
  font-size: 50px;
  color: var(--color--thirdary);
  @media only screen and (max-width: 1200px) {
    justify-content: center;
    align-items: center;
  }
  @media only screen and (max-width: 768px) {
    justify-content: center;
    align-items: center;
  }
`;
const TextColor = styled.span`
  color: var(--color--primary);
`;

const MainContainer = styled.div`
  padding: 100px 0 0 0;
  background: rgb(1, 30, 38);
  background: linear-gradient(
    180deg,
    rgba(1, 30, 38, 1) 0%,
    rgba(10, 38, 46, 0.8909512761020881) 34%,
    rgba(54, 77, 84, 0.839907192575406) 62%,
    rgba(255, 255, 255, 0.48259860788863107) 100%
  );
`;

const Container = styled.div`
  margin: 100px 20% 50px 20%;
  padding: 20px;
  background: var(--color--primary);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  @media only screen and (max-width: 1200px) {
    margin: 100px 15% 50px 15%;

    justify-content: center;
    align-items: center;
  }
  @media only screen and (max-width: 768px) {
    margin: 100px 10% 50px 10%;

    justify-content: center;
    align-items: center;
  }
`;

const Row1 = styled.div`
  padding: 10px 0 0 10px;
  margin: 0;
  font-size: 30px;
  font-weight: 1000;
  flex-wrap: wrap;
  @media only screen and (max-width: 1200px) {
    text-align: center;
    font-size: 40px;
  }
  @media only screen and (max-width: 768px) {
    text-align: center;
    font-size: 40px;
  }
`;

const Row2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 1200px) {
    flex-direction: column;
  }
  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const Col = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  font-size: 20px;
  text-align: center;
  width: 100%;
  @media only screen and (max-width: 1200px) {
    padding: 10px 0 0 0;
    width: 60%;
  }
  @media only screen and (max-width: 768px) {
    padding: 10px 0 0 0;
    width: 60%;
  }
`;

const RowDescription = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 40px 0 20px 0;
`;

const RowHeadline = styled.div`
  padding: 0 0 0 5%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  img {
    overflow: hidden;
    width: 80%;
  }
  @media only screen and (max-width: 1200px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  @media only screen and (max-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`;

const ColHeadline = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width 300px;
`;

const SubHeadline = styled.p`
  font-size: 30px;
  color: var(--color--thirdary);
`;

const TextArea = styled.div`
  margin: 40px 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: start;
  font-size: 20px;
`;
const VoteContainer = styled.div`
  padding: 10px;

  background: var(--color--secondary);
  color: var(--color--thirdary);
  text-align: center;
  font-size: 40px;
`;

const VoteContainerRow1 = styled.p`
  margin: 10px;
`;

const VoteContainerRow2 = styled.div`
  padding: 0 10% 0 10%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const VoteCard = styled.div`
  background: var(--color--thirdary);
  border-radius: 10px;
  margin: 20px;
  width: 400px;
  height: 400px;
`;

const NewsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 5% 0 5%;
`;

const NewsHeader = styled.p`
  font-size: 30px;
`;

const NewsCardContainer = styled.div`
  margin: 0 10% 0 10%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const NewsCard = styled.div`
  background: var(--color--primary);
  margin: 20px;
  width: 400px;
  height: 500px;
  @media only screen and (max-width: 1200px) {
    height: 350px;
  }
  @media only screen and (max-width: 768px) {
    height: 350px;
  }
`;

const HomeContainer = styled.div`
  heigth: 100vh;
`;

const HeadlineImage = styled.div`
  @media only screen and (max-width: 1200px) {
    display: none;
  }
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const RatingContainer = styled.div`
  margin: 0;
  width: 100vw;
  height: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const PartnerContainer = styled.div`
  padding: 0 5% 0 5%;
  font-size: 30px;
  width: 100vw;
  height: 800px;
  display: flex;
  flex-direction: column;
`;

const PartnerLogo = styled.img`
  margin: 100px;
  width: 200px;
`;
const PartnerLogoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
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
  Row2,
  Row1,
  Col,
  TextColor,
  ColHeadline,
  RowHeadline,
  SubHeadline,
  TextArea,
  VoteContainer,
  VoteContainerRow1,
  VoteContainerRow2,
  VoteCard,
  NewsContainer,
  NewsHeader,
  NewsCardContainer,
  NewsCard,
  HeadlineImage,
  HomeContainer,
  RatingContainer,
  PartnerContainer,
  RowDescription,
  RowLogo,
  PartnerLogo,
  PartnerLogoContainer,
};
