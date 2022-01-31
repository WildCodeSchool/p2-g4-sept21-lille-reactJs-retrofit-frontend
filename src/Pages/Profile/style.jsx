import styled from 'styled-components';

export const Container = styled.div`
  min-height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 100px;
  font-size: 20px;
  @media (max-width: 768px) {
    padding-top: 160px;
    font-size: 14px;
  }
  span {
    color: var(--color--primary);
    text-transform: capitalize;
  }
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  background-color: var(--color--thirdary);
  border: solid 1px var(--color--secondary);
  border-radius: 8px;
  width: 150px;
  height: 40px;
  margin: 15px 0 20px 0;
  padding-top: 10px;
  color: #000000;
  font-size: 22px;
  :hover {
    border: none;
    background-color: var(--color--primary);
    color: var(--color--thirdary);
    cursor: pointer;
  }
  @media (max-width: 768px) {
    margin-bottom: 20px;
    font-size: 18px;
  }
`;
