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
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  background-color: var(--color--primary);
  border: solid 2px var(--color--secondary);
  border-radius: 8px;
  width: 150px;
  padding: 10px;
  margin: 15px 0 20px 0;
  color: white;
  font-size: 22px;
  @media (max-width: 768px) {
    margin-bottom: 20px;
    font-size: 18px;
  }
`;
