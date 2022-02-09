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
`;

export const Content = styled.div`
  background-color: rgb(1, 30, 38);
  padding-bottom: 0.6rem;
  color: white;
  border-radius: 10px;
  max-width: 70vw;
  height: 30vh;
  padding: 5px 0 5px 0;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
