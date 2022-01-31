import styled from 'styled-components';

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

const Card = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 40%;
  border: 2px solid var(--color--primary);
  background-color: var(--color--primary);
  margin: 8px 12px 0 5px;
  border-radius: 8px;
  @media (max-width: 768px) {
    height: 30vw;
    width: 45%;
    margin: 8px 0 0 11px;
    border: none;
    flex-direction: column;
  }
`;

const Row2 = styled.div`
  height: 55px;
  }
`;
export { Col4, Card, Row2 };
