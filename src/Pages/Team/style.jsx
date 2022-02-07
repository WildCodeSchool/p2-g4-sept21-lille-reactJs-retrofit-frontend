import styled from 'styled-components';

const STeam = styled.div`
  width: 100vw;
  height: auto;
  padding-top: 75px;
  display: flex;
  flex-direction: column;
  text-align: center;
  @media (max-width: 768px) {
    padding-top: 150px;
  }
`;

const TeamView = styled.div`
  width: 100vw;
  height: auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const Col = styled.div`
  height: 180px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    height: 100px;
  }
  h1 {
    font-size: 45px;
    @media (max-width: 768px) {
      font-size: 35px;
    }
  }
  span {
    color: var(--color--primary);
  }
  button {
    width: 240px;
    min-height: 40px;
    font-size: 25px;
    border: solid 2px var(--color--primary);
    border-radius: 5px;
    background: none;
    :hover {
      background: var(--color--primary);
      color: white;
      cursor: pointer;
    }
  }
`;

const Row = styled.div`
  width: 80vw;
  display: flex;
  flex-direction: row;
  align-self: center;
  @media (max-width: 768px) {
    margin-top: 15px;
    width: 90vw;
  }
  p {
    font-size: 30px;
    @media (max-width: 768px) {
      font-size: 23px;
    }
  }
`;

export { TeamView, STeam, Col, Row };
