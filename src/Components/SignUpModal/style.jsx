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
  background-color: rgba(0, 0, 0, 0.4);
`;

const ModalContainer = styled.div`
  background-color: var(--color--secondary);
  color: var(--color--thirdary);
  font-size: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  border-radius: 20px;
  width: 40%;
  border: 4px solid #00e6c8;
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
  button {
    all: unset;
    cursor: pointer;
    font-size: 30px;
  }
  button:hover {
    color: #00e6c8;
  }
`;
const Input = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 30px 0 30px 0;
  input {
    margin: 15px 0 0 0;
    width: 25vw;
    height: 30px;
  }

  span.error {
    color: red;
    font-size: 20px;
  }
  span.success {
    color: green;
    font-size: 20px;
  }
`;

export { Overlay, ModalContainer, MainContainer, Input, ClosureContainer };
