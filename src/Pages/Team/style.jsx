import styled from 'styled-components';

const STeam = styled.div`
  width: 100vw;
  height: auto;
  padding-top: 75px;
  display: flex;
  flex-direction: column;
  text-align: center;
  span {
    color: var(--color--primary);
  }
  button {
    height: 40px;
    width: 130px;
  }
`;

const TeamView = styled.div`
  width: 100vw;
  height: auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-top: 25px;
  h1 {
    font-size: 45px;
  }
`;

const Row2 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  p {
    font-size: 30px;
  }
`;

export { TeamView, STeam, Row, Row2 };
