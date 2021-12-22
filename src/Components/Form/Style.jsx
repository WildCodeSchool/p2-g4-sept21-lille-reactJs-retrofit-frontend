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

  .comments {
    width: 50.8vw;
    height: 30vh;
  }
`;

export const Button = styled.form`
  input {
    background-color: var(--color--primary);
    border: solid 2px var(--color--secondary);
    width: 10vw;
    height: 5vh;
    margin-bottom: 7vh;
  }
`;

export default { SForm, Button };
