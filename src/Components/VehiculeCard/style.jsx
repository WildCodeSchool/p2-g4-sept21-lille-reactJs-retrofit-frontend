import styled from 'styled-components';

export const SVehiculeCard = styled.div`
  border-radius: 10px;
  width: 310px;
  height: 380px;
  text-align: center;
  margin: 0 3vw 4.5vh 3vw;
  display: flex;
  flex-direction: column;
  background-color: var(--color--secondary);
  padding-top: 10px;
  :hover {
    box-shadow: rgba(0, 0, 0, 0.678) 0px 1px 4px;
  }
  a {
    margin: 0 auto 0 auto;
  }
  @media (max-width: 768px) {
    min-width: 80vw;
    height: 420px;
  }
`;

export const Btn = styled.button`
  background-color: var(--color--secondary);
  border: 2px solid var(--color--primary);
  color: white;
  width: 290px;
  height: 50px;
  padding-top: 5px;
  border-radius: 5px;
  justify-content: center;
  font-size: 24px;
  :hover {
    background-color: var(--color--primary);
    cursor: pointer;
  }
  @media (max-width: 768px) {
    width: 320px;
    height: 60px;
  }
`;

export const Text = styled.div`
  justify-content: center;
  color: var(--color--thirdary);
  h2 {
    font-size: 30px;
    margin-top: 30px;
    width: 50%;
    text-align: center;
    margin-bottom: 10px;
  }
  h2:nth-child(1) {
    margin-left: 20px;
  }
  h2:nth-child(2) {
    margin-right: 10px;
  }
  div {
    display: flex;
    flex-direction: row;
  }
  p {
    font-size: 18px;
    padding-bottom: 4px;
    @media (max-width: 768px) {
      padding-bottom: 15px;
    }
  }
`;

export const Image = styled.img`
  height: 180px;
  width: 290px;
  border-radius: 5px;
  margin-left: auto;
  margin-right: auto;
  @media (max-width: 768px) {
    height: 200px;
    width: 320px;
  }
`;
