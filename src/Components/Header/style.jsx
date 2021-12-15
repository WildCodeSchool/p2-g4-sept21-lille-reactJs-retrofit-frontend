import styled from 'styled-components';
import { Home } from '@styled-icons/entypo/Home';
import { User } from '@styled-icons/boxicons-solid/User';
import { Bars } from '@styled-icons/fa-solid/Bars';

export const SHeader = styled.div`
  height: 75px;
  width: 100vw;
  background-color: var(--color--secondary);
  position: fixed;
`;

export const BlueHome = styled(Home)`
  color: var(--color--primary);
  height: 75px;
  width: 50px;
  margin-right: 0px;
  :hover {
    cursor: pointer;
  }
  @media (max-width: 1400px) {
    margin-right: -15px;
  }
  @media (max-width: 768px) {
    height: 35px;
    margin-right: -15px;
    width: 35px;
  }
`;

export const BlueUser = styled(User)`
  color: var(--color--primary);
  min-width: 50px;
  max-height: 75px;
  min-height: 75px;
  max-width: 50px;
  margin-right: 10px;
  :hover {
    cursor: pointer;
  }
  @media (max-width: 768px) {
    height: 35px;
    margin-right: 10px;
    min-height: 0px;
    max-height: 35px;
  }
`;

export const BlueBars = styled(Bars)`
  display: none;
  color: var(--color--primary);
  height: 45px;
  margin-right: 20px;
  :hover {
    cursor: pointer;
  }
  @media (max-width: 1400px) {
    display: block;
  }
  @media (max-width: 768px) {
    height: 35px;
    margin-right: 20px;
  }
`;

export const Col = styled.div`
  width: 20vw;
  height: 75px;
  @media (max-width: 768px) {
    width: 50vw;
  }
`;

export const Col2 = styled.div`
  width: 80vw;
  max-height: 75px;
  margin: 0;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: right;
  font-size: 30px;
  @media (max-width: 1400px) {
    display: none;
  }
`;

export const Col3 = styled.div`
  display: flex;
  color: var(--color--primary);
  @media (max-width: 1400px) {
    align-items: center;
    margin-left: auto;
  }
  @media (max-width: 768px) {
    display: flex;
    align-content: center;
    align-items: center;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
    order: 4;
  }
`;

export const Col4 = styled.div`
  display: flex;
  max-height: 75px;
  width: auto;
  flex-direction: row;
  color: var(--color--primary);
  @media (max-width: 1400px) {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    align-content: right;
  }
  @media (max-width: 768px) {
    order: 2;
  }
`;

export const Ul = styled.ul`
  color: var(--color--thirdary);
  text-decoration: none;
  margin-top: 37px;
  padding-right: 20px;
  @media (max-width: 768px) {
    text-align: center;
    font-size: 35px;
    margin: 0;
    padding: 50px 0 0 0;
  }
  @media (max-width: 1400px) {
    display: flex;
    flex-direction: column;
    text-align: center;
    margin-top: 0px;
    padding: 70px 0 0 0;
    font-size: 35px;
  }
`;

export const Li = styled.a`
  margin: 0 0 30px 0;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 1400px) {
    display: flex;
    justify-content: space-between;
  }
  @media (max-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    background-color: var(--color--secondary);
  }
`;

export const Row2 = styled.div`
  height: 50px;
  display: flex;
  flex-direction: row;
  float: right;
  background-color: var(--color--secondary);
  @media (max-width: 768px) {
    display: none;
  }
`;

export const Img = styled.img`
  height: 45px;
  width: 260px;
  margin: 1rem;
  @media (max-width: 768px) {
    height: 35px;
    width: 202px;
    margin-top: 20px;
    margin-left: 0px;
  }
`;

export const DropLogin = styled.div`
  height: 50px;
  width: 145px;
  background-color: var(--color--secondary);
  display: flex;
  float: right;
  color: var(--color--thirdary);
  font-size: 25px;
  align-content: center;
  text-align: center;
  justify-content: center;
  padding-top: 8px;
  padding-left: 3px;
  animation: Fade 0.4s ease-in-out;
  @keyframes Fade {
    0% {
      display: none;
      opacity: 0;
    }
    100% {
      display: block;
      opacity: 1;
    }
  }
  cursor: pointer;
  :hover {
    color: var(--color--primary);
  }
`;

export const Overlay = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: var(--color--secondary);
  display: flex;
  justify-content: center;
  animation: Fade 0.4s ease-in-out;
  @keyframes Fade {
    0% {
      display: none;
      opacity: 0;
    }
    100% {
      display: block;
      opacity: 1;
    }
  }
  @media (min-width: 1400px) {
    display: none;
  }
`;

export default {
  SHeader,
  Img,
  Col,
  Col2,
  Col3,
  Col4,
  Li,
  Row,
  Row2,
  DropLogin,
  BlueBars,
  Overlay,
};
