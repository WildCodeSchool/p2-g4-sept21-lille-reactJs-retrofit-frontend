import styled from 'styled-components';
import { Home } from '@styled-icons/entypo/Home';
import { User } from '@styled-icons/boxicons-solid/User';
import { Bars } from '@styled-icons/fa-solid/Bars';

const SHeader = styled.div`
  height: 75px;
  width: 100%;
  background-color: var(--color--secondary);
  position: fixed;
  z-index: 1;

  ul {
    color: var(--color--thirdary);
    text-decoration: none;
    margin-top: 37px;
    padding-right: 20px;

    @media (max-width: 1400px) {
      display: flex;
      flex-direction: column;
      text-align: center;
      margin-top: 0;
      padding: 70px 0 0 0;
      font-size: 35px;
    }

    @media (max-width: 768px) {
      margin: 0;
      padding: 50px 0 0 0;
    }
  }
`;

const BlueHome = styled(Home)`
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

const BlueUser = styled(User)`
  color: var(--color--primary);
  min-width: 50px;
  max-width: 50px;
  min-height: 75px;
  max-height: 75px;
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

const BlueBars = styled(Bars)`
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

const Row = styled.div`
  display: flex;
  flex-direction: row;

  & > * {
    height: 75px;
  }

  @media (max-width: 1400px) {
    justify-content: space-between;
  }

  @media (max-width: 768px) {
    flex-wrap: wrap;
    background-color: var(--color--secondary);
  }

  .Col1 {
    width: 20vw;

    @media (max-width: 768px) {
      width: 50vw;
    }

    img {
      height: 45px;
      width: 260px;
      margin: 1rem;

      @media (max-width: 768px) {
        height: 35px;
        width: 202px;
        margin-top: 20px;
        margin-left: 0;
      }
    }
  }

  .Col2 {
    width: 80vw;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: right;
    font-size: 30px;

    @media (max-width: 1400px) {
      display: none;
    }
  }

  .Col3 {
    display: flex;
    color: var(--color--primary);

    @media (max-width: 1400px) {
      align-items: center;
      margin-left: auto;
    }

    @media (max-width: 768px) {
      display: flex;
      justify-content: center;
      margin: auto;
      order: 4;
    }
  }

  .Col4 {
    display: flex;
    width: auto;
    flex-direction: row;
    color: var(--color--primary);

    @media (max-width: 1400px) {
      justify-content: flex-end;
      align-items: center;
    }

    @media (max-width: 768px) {
      order: 2;
    }
  }
`;

const Row2 = styled.div`
  height: 50px;
  display: flex;
  flex-direction: row;
  float: right;
  background-color: var(--color--secondary);

  @media (max-width: 768px) {
    display: none;
  }
`;

const DropLogin = styled.div`
  height: 50px;
  width: 145px;
  background-color: var(--color--secondary);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: var(--color--thirdary);
  font-size: 25px;
  padding-top: 8px;
  padding-left: 3px;
  animation: Fade 0.4s ease-in-out;
  cursor: pointer;

  :hover {
    color: var(--color--primary);
  }

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
`;

const Overlay = styled.div`
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

export { SHeader, Row, Row2, DropLogin, BlueBars, Overlay, BlueHome, BlueUser };
