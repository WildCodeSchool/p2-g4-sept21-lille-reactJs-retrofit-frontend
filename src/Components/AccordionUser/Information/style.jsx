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

export const Form = styled.form`
  @media (max-width: 1400px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 70vw;
  }
  @media (max-width: 768px) {
    width: 80vw;
    margin-left: auto;
    margin-right: auto;
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
    width: 50vw;
  }
  @media (max-width: 768px) {
    width: 40vw;
    margin-left: auto;
    margin-right: auto;
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
    width: 50vw;
  }
  @media (max-width: 768px) {
    width: 40vw;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const Button = styled.button`
  background-color: var(--color--primary);
  border: solid 2px var(--color--secondary);
  width: 10vw;
  height: 40px;
  color: white;
  font-size: 20px;
  @media (max-width: 1400px) {
    width: 32vw;
    min-height: 40px;
    margin-top: 42px;
  }
`;
