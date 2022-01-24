import styled, { keyframes } from 'styled-components';
import { RightArrow } from '@styled-icons/boxicons-solid/RightArrow';
import { DownArrow } from '@styled-icons/boxicons-solid/DownArrow';

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

export const SAccordion = styled.div`
  margin: 0.6rem auto;
  font-family: 'MyFont';
`;

export const ArrowRight = styled(RightArrow)`
  height: 25px;
  width: 25px;
  @media (max-width: 768px) {
    height: 20px;
    width: 20px;
  }
`;

export const ArrowDown = styled(DownArrow)`
  height: 25px;
  width: 25px;
  @media (max-width: 768px) {
    height: 20px;
    width: 20px;
  }
`;

export const Header = styled.div`
  width: 70vw;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: start;
  border-radius: 10px;
  color: white;
  cursor: pointer;
  background-color: rgb(0, 230, 200);
  :hover {
    background-color: rgb(0, 173, 150);
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }
  @media (max-width: 768px) {
    width: 80vw;
    height: 40px;
  }
  h1 {
    display: flex;
    flex-direction: row;
    font-size: 30px;
    color: white;
    margin-right: 5px;
    margin-top: 14px;
    @media (max-width: 768px) {
      font-size: 20px;
      margin-top: 12px;
    }
  }
  div {
    height: 50px;
    width: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 768px) {
      padding-bottom: 10px;
    }
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
