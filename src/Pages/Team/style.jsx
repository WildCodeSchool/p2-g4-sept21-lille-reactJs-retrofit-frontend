import styled from 'styled-components';

const STeam = styled.div`
  width: 100vw;
  height: auto;
  padding-top: 75px;
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const TeamView = styled.div`
  width: 100vw;
  height: auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const Row = styled.div`
  height: 100px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-top: 35px;
  h1 {
    font-size: 45px;
    margin-left: 320px;
  }
  span {
    color: var(--color--primary);
  }
  button {
    height: 40px;
    width: 240px;
    font-size: 25px;
    margin-left: 90px;
    margin-bottom: 10px;
    padding: 5px;
    border: solid 2px var(--color--primary);
    border-radius: 5px;
    background: none;
    :hover {
      background: var(--color--primary);
      cursor: pointer;
    }
  }
`;

const Row2 = styled.div`
  width: 80vw;
  display: flex;
  flex-direction: row;
  align-self: center;
  p {
    font-size: 30px;
  }
`;

export { TeamView, STeam, Row, Row2 };
