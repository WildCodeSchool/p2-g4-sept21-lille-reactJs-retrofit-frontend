import styled from 'styled-components';

export const SForm = styled.div`
  margin-top: 12vh;

  p {
    width: 100vw;
    font-size: 20px;
    color: black;
    text-align: center;
    font-weight: bold;
  }

  select {
    appearance: none;
    cursor: pointer;
    width: 50.8vw;
    padding-left: 9px;
    height: 5vh;
    margin: 7px;
    border: none;
    border-radius: 8px;
    background-color: var(--color--primary);
    color: var(--color--secondary);
    font-size: 16px;
  }

  select:hover {
    background-color: rgb(0, 173, 150);
  }

  option {
    color: var(--color--thirdary);
    background-color: var(--color--secondary);
    border-radius: 8px;
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
  }

  form {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 70vw;
    margin: auto;
  }

  .tallInput {
    width: 50.8vw;
  }

  .textarea {
    width: 51vw;
    height: 30vh;
    border: solid 2px var(--color--primary);
    border-radius: 5px;
  }
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

export default { SForm, Button };
