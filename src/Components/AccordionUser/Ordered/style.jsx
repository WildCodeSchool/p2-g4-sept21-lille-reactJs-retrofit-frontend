import styled, { keyframes } from 'styled-components';

const openAnimation = keyframes`
    0% {
      display: none;
      opacity: 0;
    }
    100% {
      display: block;
      opacity: 1;
    }
`;

const closeAnimation = keyframes`
    0% {
      display: none;
      opacity: 0;
    }
    100% {
      display: block;
      opacity: 1;
    }
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  background-color: rgb(1, 30, 38);
  padding-bottom: 0.6rem;
  color: white;
  border-radius: 10px;
  height: 650px;
  max-width: 70vw;
  padding: 5px 0 5px 0;
  animation-duration: 0.55s;
  animation-fill-mode: forwards;
  animation-name: ${(props) => (props.toggle ? openAnimation : closeAnimation)};
  transition: 0.5s linear all;
  overflow-y: scroll;
  @media (max-width: 768px) {
    max-width: 80vw;
  }
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 1400px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Col = styled.div`
  width: 40%;
  height: 100%;
  @media (max-width: 1400px) {
    width: 90%;
    display: flex;
    text-align: center;
    justify-content: center;
  }
  img {
    max-width: 27vw;
    max-height: 280px;
    margin: 8px 0 5px 12px;
    border-radius: 7px;
    @media (max-width: 768px) {
      min-height: 200px;
      min-width: 370px;
      margin: 8px 10px 5px 12px;
    }
    @media (max-width: 1400px) {
      min-height: 200px;
      min-width: 370px;
    }
  }
`;

const Col2 = styled.div`
  width: 60%;
  height: 280px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  @media (max-width: 1400px) {
    min-width: 60vw;
  }
  @media (max-width: 768px) {
    width: 75vw;
    height: 350px;
    margin-top: 10px;
    border: 2px solid var(--color--primary);
    border-radius: 8px;
  }
  p {
    @media (max-width: 1400px) {
      font-size: 20px;
    }
    @media (max-width: 768px) {
      font-size: 20px;
    }
  }
`;

const Units = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 20%;
  border: 2px solid var(--color--primary);
  margin: 8px 12px 0 5px;
  border-radius: 8px;
  @media (max-width: 768px) {
    height: 21vw;
    width: 45%;
    margin: 8px 0 0 11px;
    border: none;
    flex-direction: column;
  }
`;

const Btncontainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%
  height: 30%;
  justify-content:center;
  text-align : center;
  margin-left: auto;
  margin-right: auto;
    @media (max-width: 768px) {
    height: 80px;
  }
`;

const Button = styled.button`
  height: 50px;
  width: 340px;
  color: var(--color--thirdary);
  background-color: var(--color--secondary);
  border: 2px solid var(--color--primary);
  border-radius: 8px;
  font-size: 25px;
  padding-top: 3px;
  margin-top: 25px;
  margin-bottom: 40px;
  :hover {
    background-color: var(--color--primary);
    cursor: pointer;
  }
  @media (max-width: 768px) {
    width: 270px;
    font-size: 20px;
  }
`;

const Col3 = styled.div`
  width: 100%;
  text-align: center;
  font-size: 30px;
  font-weight: bold;
  p {
    margin-top: 15px;
  }
`;

const Col4 = styled.div`
  width: 100%;
  text-align: center;
  font-size: 25px;
  font-weight: bold;
  p {
    margin-top: 45px;
    @media (max-width: 768px) {
      margin-top: 15px;
    }
  }
`;

export { Content, Row, Units, Col, Col2, Col3, Col4, Button, Btncontainer };
