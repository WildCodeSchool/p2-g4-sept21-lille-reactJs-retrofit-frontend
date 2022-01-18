import styled, { keyframes } from 'styled-components';

const openAnimation = keyframes`
    0% {
      display: none;
      opacity: 0;
    }
    100% {
      display: block;
      opacity: 1;
    }
`;
const closeAnimation = keyframes`
    0% {
      display: none;
      opacity: 0;
    }
    100% {
      display: block;
      opacity: 1;
    }
`;

export const Content = styled.div`
  background-color: rgb(1, 30, 38);
  padding-bottom: 0.6rem;
  color: white;
  border-radius: 10px;
  max-width: 70vw;
  padding: 5px 0 5px 0;
  animation-duration: 0.55s;
  animation-fill-mode: forwards;
  animation-name: ${(props) => (props.toggle ? openAnimation : closeAnimation)};
  transition: 0.5s linear all;
  @media (max-width: 768px) {
    max-width: 80vw;
  }
`;

export default Content;
