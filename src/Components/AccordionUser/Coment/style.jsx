import styled from 'styled-components';

export const BorderContainer = styled.div`
  border: 2px solid var(--color--primary);
  width: 68vw;
  height: 16vh;
  margin-top: 1vh;
  border-radius: 8px;

  p {
    color: white;
    padding-left: 1vw;
    font-size: 18px;
    margin-top: -10px;
    margin-bottom: 10px;
  }

  h4 {
    color: white;
    padding-left: 1vw;
    font-size: 18px;
  }
  @media (max-width: 768px) {
    max-width: 80vw;
    height: 215px;
    padding-left: 5px;
  }
`;

export const Content = styled.div`
  background-color: var(--color--secondary);
  padding-bottom: 0.6rem;
  color: white;
  border-radius: 10px;
  max-width: 80vw;
  height: 30vh;
  padding: 5px 0 5px 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  @media (max-width: 768px) {
    max-width: 80vw;
    height: 45vh;
    padding-bottom: 6px;
    display: flex;
    justify-content: space-between;
  }
`;
