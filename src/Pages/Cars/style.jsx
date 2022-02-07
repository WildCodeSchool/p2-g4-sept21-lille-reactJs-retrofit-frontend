import styled from 'styled-components';

const SCarsView = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  width: 70vw;
  margin-left: auto;
  margin-right: auto;
`;

const Title = styled.h1`
  color: black;
  margin-top: 110px;
  margin-bottom: 30px;
  text-align: center;
  @media (max-width: 768px) {
    min-width: 80vw;
    margin-top: 160px;
  }
`;

export { SCarsView, Title };
