import styled from 'styled-components';

export const SContainer = styled.div`
  margin-top: 85px;
  margin-bottom: 10px;
  padding: 2px;
  display: flex;
  justify-content: center;
`;

export const SListAdress = styled.div`
  padding: 2px;
  border: solid 1px var(--color--secondary);
  width: 20vw;
  height: 90vh;
  overflow: scroll;
`;
export const SAdress = styled.div`
  border: solid 2px var(--color--primary);
  margin: 5px;
  background-color: var(--color--secondary);
  color: white;

  h3 {
    text-align: center;
    padding-top: 3px;
  }
  p,
  h3 {
    margin: 5px;
  }
  p,
  h3:first-letter {
    text-transform: capitalize;
  }
  display: flex;
  flex-direction: column;
  text-transform: lowercase;
`;
