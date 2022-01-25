import styled from 'styled-components';
import { CloudSlash } from '@styled-icons/bootstrap/CloudSlash';
import { BatteryCharging } from '@styled-icons/bootstrap/BatteryCharging';
import { CurrencyEuro } from '@styled-icons/bootstrap/CurrencyEuro';
import { EmojiSunglasses } from '@styled-icons/bootstrap/EmojiSunglasses';
import { BatteryFull } from '@styled-icons/bootstrap/BatteryFull';

const SConfiguration = styled.div`
  background-color: #011e26;
  height: 467px;
  width: 1334;
  margin: 90px 90px;
  div.Row1 {
    padding-top: 40px;
    text-align: center;
    color: white;
    font-size: 30px;
  }
  div.Row2 {
    display: flex;
    justify-content: space-around;
  }
  img {
    width: 40em;
    height: 20em;
  }
  div.BatteryText {
    color: #00e6c8;
    margin-top: 190px;
    margin-right: 200px;
  }
`;

const Page = styled.div`
  height: 100%;
`;

const Story = styled.div`
  margin: 65px;
  font-size: 20px;
`;

const BatteryHeader = styled(BatteryFull)`
  color: #00e6c8;
  width: 80px;
`;

const EuroHeader = styled(CurrencyEuro)`
  color: #00e6c8;
  width: 80px;
`;

const Advantage = styled.div`
  text-align: center;
`;

const Cloud = styled(CloudSlash)`
  color: black;
  width: 80px;
`;

const Battery = styled(BatteryCharging)`
  color: black;
  width: 80px;
`;

const Euro = styled(CurrencyEuro)`
  color: black;
  width: 80px;
`;

const Emoji = styled(EmojiSunglasses)`
  color: black;
  width: 80px;
`;

const FullBattery = styled(BatteryFull)`
  color: black;
  width: 80px;
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
  height: 718px;
  width: 1160px;
  margin: auto;
  background: #00e6c8;
  border-radius: 20px;
`;

const ConfigurationOfCars = styled.div`
  text-align: center;
`;

const Warranty = styled.div`
  text-align: center;
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
