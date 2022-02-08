import styled from 'styled-components';

export const BorderContainer = styled.div`
  border: 2px solid var(--color--primary);
  width: 68vw;
  height: 13vh;
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
`;

export const Content = styled.div`
  background-color: var(--color--secondary);
  padding-bottom: 0.6rem;
  border-radius: 10px;
  max-width: 70vw;
  height: 30vh;
  padding: 5px 0 5px 0;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
