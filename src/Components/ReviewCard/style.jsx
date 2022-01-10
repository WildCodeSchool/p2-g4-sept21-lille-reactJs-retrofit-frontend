import styled from 'styled-components';

const Card = styled.div`
  display: flex;
  flex-direction: column;
  border: var(--color--primary) 4px solid;
  margin: 20px;
  padding: 40px;
  font-size: 30px;
  width: 30vw;
  height: 300px;
  @media only screen and (max-width: 600px) {
    width: 75vw;
  }
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h3 {
    margin: 30px 0 0 0;
  }
`;

export { Card, CardContainer };
