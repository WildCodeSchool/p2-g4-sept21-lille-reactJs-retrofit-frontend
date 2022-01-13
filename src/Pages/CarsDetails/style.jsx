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
  margin: 50px 60px;
  div.Row1 {
    padding-top: 40px;
    text-align: center;
    color: white;
    font-size: 30px;
  }
  .BatteryLogo {
    margin: 10px;
  }
  .EuroLogo {
    margin: 60px;
  }
  img {
    width: 40em;
    height: 20em;
    display: flex;
    justify-content: center;
  }
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

const Contour = styled.div`
  font-size: 20px;
  text-align: center;
  display: flex;
  margin: 30px;
`;

const Container = styled.div`
  height: 718px;
  width: 1160px;
  margin: auto;
  background: #00e6c8;
  border-radius: 20px;
  /* display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap; */
`;

const ConfigurationOfCars = styled.div`
  text-align: center;
  input[type='checkbox'] {
    outline: 1px solid #00e6c8;
  }
`;

const Warranty = styled.div`
  text-align: center;
`;

export {
  Story,
  Advantage,
  BatteryHeader,
  EuroHeader,
  Cloud,
  Battery,
  Euro,
  Emoji,
  FullBattery,
  Contour,
  Container,
  ConfigurationOfCars,
  Warranty,
  SConfiguration,
};
