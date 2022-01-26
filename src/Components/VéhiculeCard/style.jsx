import styled from 'styled-components';

export const SVéhiculeCard = styled.div`
  border: 2px solid black;
  border-radius: 7px;
  width: 250px;
  height: 320px;
  text-align: center;
  margin: 0 3vw 3vh 3vw;
  display: flex;
  flex-direction: column;
  background-color: var(--color--secondary);
  a {
    margin: 0;
    color: white;
    :hover {
      color: white;
    }
  }
`;

export const Btn = styled.button`
  background-color: var(--color--primary);
  color: white;
  margin-bottom: 5px;
  padding: 10px;
  margin: 5px;
  border-radius: 5px;
  justify-content: center;
`;

export const Text = styled.div`
  justify-content: center;
  color: var(--secondary--color);
`;

export const Image = styled.img`
  height: 150px;
  width: 220px;
  margin-top: 10px;
  justify-content: center;
  border-radius: 5px;
`;
