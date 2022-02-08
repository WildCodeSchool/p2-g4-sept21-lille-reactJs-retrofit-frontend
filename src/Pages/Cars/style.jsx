import styled from 'styled-components';

const SCarsView = styled.div`
  margin: 50px 20%;
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
  margin-top: 120px;
  margin-bottom: 30px;
  text-align: center;
  font-size: 40px;
  @media (max-width: 768px) {
    width: 80vw;
    margin-top: 160px;
    margin-left: auto;
    margin-right: auto;
  }
`;

export { SCarsView, Title };
