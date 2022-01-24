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
  background-color: rgba(0, 0, 0, 0.8);
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
  min-width: 32%;
  min-height: 72%;
  border: 3px solid var(--color--primary);
`;

const ClosureContainer = styled.div`
  display: flex;
  justify-content: end;
  cursor: pointer;
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    text-align: center;
    width: 27vw;
    margin-top: 10px;
  }
  span.error {
    color: red;
    font-size: 20px;
  }
  span.success {
    color: green;
    font-size: 20px;
  }
  button {
    all: unset;
    cursor: pointer;
  }

  button:hover {
    color: #00e6c8;
  }
  p {
    font-size: 30px;
    margin: 20px;
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
    width: 150px;
    height: 35px;
  }
`;

export { Overlay, ModalContainer, MainContainer, Input, ClosureContainer };
