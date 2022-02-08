import styled from 'styled-components';

export const Container = styled.div`
  min-height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 100px;
  font-size: 20px;
  span {
    color: var(--color--primary);
    text-transform: capitalize;
  }
  h1:nth-child(1) {
    text-align: center;
  }
  @media (max-width: 768px) {
    padding-top: 140px;
    font-size: 14px;
    h1:nth-child(1) {
      margin-bottom: 5px;
      text-transform: capitalize;
      width: 90vw;
    }
  }
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  background-color: var(--color--thirdary);
  border: solid 2px var(--color--primary);
  border-radius: 8px;
  width: 150px;
  height: 40px;
  margin: 15px 0 20px 0;
  padding-top: 9px;
  color: #000000;
  font-size: 22px;
  :hover {
    border: none;
    background-color: var(--color--primary);
    color: var(--color--thirdary);
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    padding-top: 11px;
  }
  @media (max-width: 768px) {
    margin-bottom: 20px;
    font-size: 18px;
  }
`;
