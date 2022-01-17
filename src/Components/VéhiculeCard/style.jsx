import styled, { keyframes } from 'styled-components';

const enter = keyframes`
    from {width: 14em;}
    to {width: 18em;
      column-width: 6rem;
      }
   
  `;

const update = keyframes`
  from {width: 14em;}
  to {width: 80vw;
    }
`;

export const SVéhiculeCard = styled.div`
  border: 2px solid black;
  border-radius: 5px;
  width: 14em;
  height: 18em;
  text-align: center;
  margin: 20px 50px;
  display: flex;
  flex-direction: column;
  animation-duration: 0.8s;
  animation-fill-mode: forwards;
  animation-name: ${(props) => (props.toggle ? update : enter)};
`;

export const Btn = styled.button`
  background-color: var(--color--primary);
  margin-bottom: 5px;
  padding: 10px;
  margin: 5px;
  border-radius: 5px;
  justify-content: center;
`;

export const Title = styled.h2`
  justify-content: center;
`;

export const Image = styled.img`
  height: 14em;
  width: 12em;
  margin: auto;
  justify-content: center;
  overflow: hidden;
`;
