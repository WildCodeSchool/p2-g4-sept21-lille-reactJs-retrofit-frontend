import styled from 'styled-components';

export const SForm = styled.div`
  margin-top: 12vh;
  width: 100vw;
  height: 90vh;
  padding-top: 13vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  @media (max-width: 768px) {
    height: 100vh;
    padding-top: 37vh;
    padding-bottom: 12vh;
  }

  form {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 70vw;
    margin: auto;
    @media (max-width: 768px) {
      width: 90vw;
    }
  }

  select:focus {
    border: 0px;
    outline: 0px;
  }
  
  select {
    appearance: none;
    cursor: pointer;
    width: 50.8vw;
    height: 5vh;
    color: white !important;
    font-size: 25px !important;
    padding-left: 9px;
    margin-bottom: 10px;
    border: none;
    border-radius: 10px;
    background-color: var(--color--primary);
    color: var(--color--secondary);
    @media (max-width: 768px) {
      width: 80vw;
      height: 40px;
      text-overflow: ellipsis;
      font-size: 20px !important;
    }
  }
  select:hover {
    background-color: var(--color--hover);
    @media (max-width: 768px) {
      background-color: var(--color--primary);
    }
  }
  option {
    color: var(--color--thirdary);
    background-color: var(--color--secondary);
  }
  option:hover {
    background-color: var(--color--secondary);
  }
  input:disabled {
    background-color: #dcdcdc;
    ::placeholder {
      color: transparent;
    }
  }
  input {
    width: 25vw;
    height: 5vh;
    border: solid 2px var(--color--primary);
    border-radius: 5px;
    margin: 6px;
    @media (max-width: 768px) {
      width: 38.5vw;
      height: 40px;
    }
  }

  .tallInput {
    width: 50.8vw;
    @media (max-width: 768px) {
      width: 80vw;
      height: 40px;
    }
  }


  .message {
    width: 50.8vw;
    margin: 6px;
    height: 30vh;
    border: solid 2px var(--color--primary);
    border-radius: 5px;
    padding: 5px 0 0 5px;
    @media (max-width: 768px) {
      height: 23.5vh;
      width: 80vw;
    @media (max-width: 768px) {
      height: 23.5vh;
      width: 80vw;
      height: 150px;

    }
  }
`;


export const ParentButton = styled.div`
  width: 100vw;
  height: 100px;
`;

export const Button = styled.button`
  background-color: white;
  border: solid 2px var(--color--primary);
  width: 150px;
  height: 5vh;
  color: black;
  font-size: 25px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 2vh auto 0 auto;
  padding-top: 5px;
  :hover {
    background-color: var(--color--primary);
    cursor: pointer;
    color: #ffffff;
  }
  @media (max-width: 768px) {
    width: 35vw;
    height: 40px;
    font-size: 20px;
  }
`;

export default { SForm, Button, ParentButton };
