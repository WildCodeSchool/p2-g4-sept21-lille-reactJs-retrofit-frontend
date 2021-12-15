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

const Headline = styled.p`
  font-size: 40px;
  color: var(--color--thirdary);
`;
const TextColor = styled.span`
  color: var(--color--primary);
`;

const MainContainer = styled.div`
  width: 100vw;
  background: rgb(1, 30, 38);
  background: linear-gradient(
    180deg,
    rgba(1, 30, 38, 1) 23%,
    rgba(50, 74, 79, 1) 43%,
    rgba(67, 89, 94, 1) 72%,
    rgba(189, 197, 199, 0.7349796938092521) 88%,
    rgba(255, 255, 255, 0.6507100308879038) 93%
  );
`;

const Container = styled.div`
  margin: 100px 20% 0px 20%;
  padding: 10px;
  width: 60%;
  background: var(--color--primary);
  border-radius: 20px;
`;

const Col = styled.div`
  padding: 10px 50px 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-size: 18px;
`;

const Row1 = styled.p`
  padding: 10px 0 0 10px;
  margin: 0;
  font-size: 30px;
  font-weight: 1000;
`;
const Row2 = styled.div`
  display: flex;
`;

const RowHeadline = styled.div`
  margin: 0 0 0 15%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  img {
    overflow: hidden;
    width: 80%;
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
  height: 550px;
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
`;

const HomeContainer = styled.div`
  width: 100vw;
`;
const HeadlineImage = styled.div``;

const RatingContainer = styled.div`
  width: 100vw;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PartnerContainer = styled.div`
  margin: 0 10% 0 10%;
  font-size: 30px;

  width: 100vw;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .img {
    width: 100vw;
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
};
