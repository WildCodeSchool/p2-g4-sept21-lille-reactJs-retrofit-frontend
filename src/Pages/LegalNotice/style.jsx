import styled from 'styled-components';

const Mention = styled.div`
  display: flex;
  flex-direction: column;
  width: 70vw;
  color: black;
  padding-top: 95px;
  margin-left: 15vw;
  margin-right: 15vw;
  h1 {
    font-size: 40px;
  }
  h2 {
    font-size: 35px;
  }
  p {
    font-size: 20px;
  }
  @media (max-width: 758px) {
    padding-top: 155px;
    width: 80vw;
    margin-left: 10vw;
    margin-right: 10vw;
  }
`;

export default Mention;
