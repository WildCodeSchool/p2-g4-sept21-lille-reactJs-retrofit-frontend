import styled from 'styled-components';

const MainContainer = styled.div`
  padding-top: 81px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1% 30%;
  h1 {
    font-size: 50px;
    font-weight: 100;
    margin: 20px 0 10px 0;
  }
  h2 {
    font-size: 1em;
    font-weight: 100;
  }
  button {
    width: 55%;
    cursor: pointer;
    font-size: 20px;
    padding: 20px;
    border-radius: 35px;
    margin: 20px;
    border: none;
  }

  button.fbButton {
    background-color: #3b5998;
    color: white;
  }

  button.googleButton {
    background-color: #fff;
    color: black;
    border: 1px solid black;
  }

  button.submitButton {
    background-color: #00e6c8;
    color: white;
  }

  p {
    text-align: start;
  }
`;
const Input = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 5px 0;
  input {
    width: 20vw;
    height: 40px;
    border-radius: 4px;
    border: 1px solid grey;
  }
  p {
    margin: 5px 0;
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

export { MainContainer, Input };
