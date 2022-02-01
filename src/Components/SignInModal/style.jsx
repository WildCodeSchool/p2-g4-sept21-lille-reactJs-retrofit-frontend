import styled from 'styled-components';

const Overlay = styled.div`
  position: fixed;
  z-index: 3;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.85);
`;

const ModalContainer = styled.div`
  position: absolute;
  background-color: var(--color--secondary);
  color: var(--color--thirdary);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 20px;
  padding: 20px;
  border-radius: 20px;
  width: 530px;
  height: 650px;
  border: 3px solid var(--color--primary);
  @media (max-width: 1400px) {
    height: 620px;
  }
  @media (max-width: 768px) {
    width: 90vw;
    height: 550px;
    top: 47.5%;
  }
`;

const ClosureContainer = styled.div`
  display: flex;
  justify-content: end;
  cursor: pointer;
  svg:hover {
    color: var(--color--primary);
  }
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    text-align: center;
    width: 350px;
    margin-top: 10px;
    margin-bottom: 0px;
    @media (max-width: 1400px) {
      font-size: 32px;
      width: 35vw;
      padding-top: -5px;
    }
    @media (max-width: 768px) {
      font-size: 25px;
      width: 70vw;
      margin-top: 0px;
      margin-bottom: 5px;
    }
  }
  p {
    font-size: 30px;
    margin: 20px;
    @media (max-width: 768px) {
      text-align: center;
    }
  }
  span.error {
    padding-top: 15px;
    color: red;
    font-size: 20px;
  }
  span.success {
    color: green;
    font-size: 20px;
    padding-top: 0px;
  }
  button:nth-child(1) {
    margin-top: 20px;
    height: 35px;
    width: 185px;
    border: none;
    background-color: none;
    color: white;
    :hover {
      color: var(--color--primary);
      background-color: var(--color--secondary);
    }
    @media (max-width: 768px) {
      padding: 0 20px 0 0;
      margin-top: 5px;
    }
  }
  button {
    all: unset;
    cursor: pointer;
    font-size: 30px;
    margin-top: 35px;
    padding: 5px 3px 0 3px;
    height: 40px;
    width: 220px;
    text-align: center;
    border: solid 2px var(--color--primary);
    border-radius: 8px;
  }
  button:hover {
    background-color: var(--color--primary);
  }
`;
const Input = styled.div`
  font-size: 22px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 30px 0 0 0;
  input {
    margin: 10px 0 0 0;
    width: 350px;
    height: 35px;
    @media (max-width: 768px) {
      width: 75vw;
    }
  }
  input:focus {
    outline: 2px solid var(--color--primary);
    border: 1px solid var(--color--primary);
  }
  @media (max-width: 768px) {
    margin-top: 15px;
  }
`;

export { Overlay, ModalContainer, MainContainer, Input, ClosureContainer };
