import styled from 'styled-components';
import { CloudSlash } from '@styled-icons/bootstrap/CloudSlash';
import { BatteryCharging } from '@styled-icons/bootstrap/BatteryCharging';
import { CurrencyEuro } from '@styled-icons/bootstrap/CurrencyEuro';
import { EmojiSunglasses } from '@styled-icons/bootstrap/EmojiSunglasses';
import { BatteryFull } from '@styled-icons/bootstrap/BatteryFull';

const SConfiguration = styled.div`
  background-color: var(--color--secondary);
  height: 467px;
  width: 90vw;
  margin: 100px 90px 0px 90px;
  border-radius: 5px;
  div.row1 {
    padding-top: 40px;
    text-align: center;
    color: white;
    font-size: 34px;
    @media only screen and (max-width: 768px) {
      padding-bottom: 40px;
    }
  }
  div.row2 {
    display: flex;
    justify-content: space-around;
    color: white;
    height: 390px;
    @media only screen and (max-width: 768px) {
      flex-direction: column;
    }
  }
  .col1 {
    text-align: center;
    font-size: 24px;
    padding-top: 50px;
    @media only screen and (max-width: 768px) {
      padding-top: 10px;
    }
    p {
      @media only screen and (max-width: 768px) {
        margin: 0;
        margin-bottom: 10px;
      }
    }
  }
  .col2 {
    text-align: center;
    font-size: 34px;
    @media only screen and (max-width: 768px) {
    }
  }
  .name {
    display: flex;
    flex-direction: row;
    padding-left: auto;
    padding-right: auto;
    justify-content: center;
    p {
      margin-right: 10px;
      margin-top: 15px;
      margin-bottom: 0px;
      height: 50px;
    }
  }
  img {
    height: 300px;
    border-radius: 5px;
    margin-top: 20px;
    @media only screen and (max-width: 768px) {
      max-height: 150px;
      border-radius: 5px;
      margin-top: 40px;
    }
  }
  div.BatteryText {
    color: var(--color--primary);
    margin-top: 190px;
    margin-right: 200px;
  }
  @media only screen and (max-width: 768px) {
    height: 670px;
    width: 330px;
    margin: 70px auto 0 auto;
  }
`;

const Page = styled.div`
  height: 100%;
  padding-top: 50px;
  @media only screen and (max-width: 768px) {
    padding-top: 100px;
  }
`;

const Story = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  text-align: center;
  width: 90vw;
  margin: 20px auto 100px auto;
  height: 400px;
  h2 {
    font-size: 34px;
    @media only screen and (max-width: 768px) {
      margin: 0;
    }
  }
  p {
    font-size: 28px;
    margin-bottom: 100px;
    @media only screen and (max-width: 768px) {
      margin-bottom: 10px;
    }
  }
  .col3 {
    width: 50vw;
    margin-top: 120px;
    @media only screen and (max-width: 768px) {
      width: 90vw;
      margin-top: 80px;
    }
  }
  .col4 {
    width: 40vw;
    text-align: center;
    font-size: 34px;
    img {
      height: 400px;
      max-width: 750px;
      border-radius: 5px;
      margin-top: 20px;
      @media only screen and (max-width: 768px) {
        display: none;
      }
    }
  }
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    height: 400px;
    margin-right: auto;
    margin-left: auto;
  }
`;

const BatteryHeader = styled(BatteryFull)`
  color: var(--color--primary);
  width: 80px;
  @media only screen and (max-width: 768px) {
    width: 60px;
  }
`;

const EuroHeader = styled(CurrencyEuro)`
  color: var(--color--primary);
  width: 80px;
  @media only screen and (max-width: 768px) {
    width: 60px;
  }
`;

const Cloud = styled(CloudSlash)`
  color: var(--color--primary);
  width: 80px;
  padding-bottom: 20px;
`;

const Battery = styled(BatteryCharging)`
  color: var(--color--primary);
  width: 80px;
  padding-bottom: 20px;
`;

const Euro = styled(CurrencyEuro)`
  color: var(--color--primary);
  width: 80px;
  padding-bottom: 20px;
`;

const Emoji = styled(EmojiSunglasses)`
  color: var(--color--primary);
  width: 80px;
  padding-bottom: 20px;
`;

const FullBattery = styled(BatteryFull)`
  color: var(--color--primary);
  width: 80px;
  padding-bottom: 20px;
`;

const Advantage = styled.h2`
  text-align: center;
  padding-bottom: 15px;
  @media only screen and (max-width: 768px) {
    padding: 0;
    height: 10px;
  }
  h2 {
    @media only screen and (max-width: 768px) {
      margin: 0;
    }
  }
`;

const Col = styled.div`
  font-size: 20px;
  text-align: center;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  margin: 30px;
`;

const Container = styled.div`
  margin: 40px 20% 100px 20%;
  padding: 20px;
  background: var(--color--secondary);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  color: white;
  div.row3 {
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
  @media only screen and (max-width: 768px) {
    margin: 100px 10% 0px 10%;
  }
`;

const ConfigurationOfCars = styled.div`
  text-align: center;
  font-size: 23px;
  margin-bottom: 80px;
  @media only screen and (max-width: 768px) {
    margin-bottom: 40px;
  }
  h2 {
    font-size: 34px;
    @media only screen and (max-width: 768px) {
      width: 90vw;
      margin-top: 40px;
      margin-right: auto;
      margin-left: auto;
    }
  }
  p {
    font-size: 28px;
  }
  select {
    appearance: none;
    cursor: pointer;
    width: 400px;
    height: 5vh;
    color: white !important;
    font-size: 25px !important;
    padding-left: 9px;
    margin-bottom: 10px;
    border: none;
    border-radius: 10px;
    background-color: var(--color--primary);
    color: var(--color--secondary);
    @media (max-width: 768px) {
      width: 80vw;
      height: 40px;
      text-overflow: ellipsis;
      font-size: 20px !important;
    }
  }
  select:hover {
    background-color: var(--color--hover);
    @media (max-width: 768px) {
      background-color: var(--color--primary);
    }
  }
  label {
    padding-right: 10px;
    input {
      padding-bottom: 15px;
      height: 18px;
    }
  }
`;

const Warranty = styled.div`
  text-align: center;
  margin-bottom: 50px;
  @media only screen and (max-width: 768px) {
    width: 90vw;
    margin-right: auto;
    margin-left: auto;
  }
  h2 {
    font-size: 30px;
    @media only screen and (max-width: 768px) {
      margin-top: 0;
    }
  }
  p {
    font-size: 28px;
  }
  button {
    width: 240px;
    min-height: 40px;
    font-size: 22px;
    border: solid 2px var(--color--primary);
    border-radius: 8px;
    background: none;
    text-transform: uppercase;
    margin-top: 5px;
    padding-top: 5px;
    :hover {
      background: var(--color--primary);
      cursor: pointer;
      color: white;
    }
  }
`;

export {
  Page,
  Story,
  Advantage,
  BatteryHeader,
  EuroHeader,
  Cloud,
  Battery,
  Euro,
  Emoji,
  FullBattery,
  Col,
  Container,
  ConfigurationOfCars,
  Warranty,
  SConfiguration,
};
