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
  @media (max-width: 1400px) {
    height: 20px;
    width: 20px;
  }
`;

export const ArrowDown = styled(DownArrow)`
  height: 25px;
  width: 25px;
  @media (max-width: 1400px) {
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
  background-color: var(--color--primary);
  :hover {
    background-color: var(--color--hover);
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }
  @media (max-width: 1400px) {
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
    @media (max-width: 1400px) {
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
    @media (max-width: 1400px) {
      padding-bottom: 10px;
    }
  }
`;

export const Content = styled.div`
  background-color: rgb(1, 30, 38);
  color: white;
  border-radius: 10px;
  padding: 5px 0 5px 10px;
  animation-duration: 0.55s;
  animation-fill-mode: forwards;
  animation-name: ${(props) => (props.toggle ? openAnimation : closeAnimation)};
  transition: 0.5s linear all;
  @media (max-width: 1400px) {
    max-width: 80vw;
    height: 330px;
    display: flex;
    /* flex-direction: column; */
    justify-content: space-evenly;
    padding: 0;
  }
  input {
    border: solid 2px var(--color--primary);
    width: 10vw;
    height: 40px;
    font-size: 23px;
    @media (max-width: 1400px) {
      width: 32vw;
      height: 35px;
    }
  }
  input:focus {
    outline: 1px solid var(--color--primary);
  }
  p {
    font-size: 25px;
    @media (max-width: 1400px) {
      font-size: 20px;
      margin-bottom: 5px;
      margin-top: 15px;
    }
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  height: 80px;
  @media (max-width: 1400px) {
    display: flex;
    flex-direction: column;
    justify-content: start;
  }
`;

export const Row2 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  height: 80px;
  margin-left: 0px;
  margin-right: 12px;
  @media (max-width: 1400px) {
    display: flex;
    flex-direction: column;
    justify-content: start;
    margin-right: 0px;
  }
`;

export const Button = styled.form`
  input {
    background-color: var(--color--primary);
    border: solid 2px var(--color--secondary);
    width: 10vw;
    height: 40px;
    color: white;
    font-size: 20px;
    @media (max-width: 1400px) {
      width: 32vw;
      height: 40px;
      margin-top: 40px;
    }
  }
`;
