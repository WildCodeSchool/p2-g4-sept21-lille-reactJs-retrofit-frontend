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

const Content = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: rgb(1, 30, 38);
  padding-bottom: 0.6rem;
  color: white;
  border-radius: 10px;
  height: auto;
  max-width: 70vw;
  padding: 5px 0 5px 0;
  animation-duration: 0.55s;
  animation-fill-mode: forwards;
  animation-name: ${(props) => (props.toggle ? openAnimation : closeAnimation)};
  transition: 0.5s linear all;
  overflow-y: scroll;
  @media (max-width: 768px) {
    max-width: 80vw;
    height: auto;
    min-height: 500px;
    justify-content: start;
  }
`;

const Btncontainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%
  height: 30%;
  justify-content:center;
  text-align : center;
  margin-left: auto;
  margin-right: auto;
    @media (max-width: 768px) {
    display:none;
  }
`;

const Button = styled.button`
  height: 50px;
  width: 340px;
  color: var(--color--thirdary);
  background-color: var(--color--secondary);
  border: 2px solid var(--color--primary);
  border-radius: 8px;
  font-size: 25px;
  padding-top: 3px;
  margin-top: 25px;
  margin-bottom: 40px;
  :hover {
    background-color: var(--color--primary);
    cursor: pointer;
  }
  @media (max-width: 768px) {
    width: 270px;
    font-size: 20px;
  }
`;

export { Content, Button, Btncontainer };
