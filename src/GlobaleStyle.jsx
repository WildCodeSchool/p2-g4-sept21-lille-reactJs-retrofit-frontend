import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --color--primary: rgb(0, 230, 200);
    --color--secondary: rgb(1, 30, 38);
    --color--thirdary: #ffffff;
    --color--hover: rgb(0, 173, 150);
  }
  *{
    box-sizing: border-box;
    font-family: 'Josefin Sans', sans-serif;
  }
  body {
    margin: 0;
    padding: 0;
  }
  a {
    text-decoration: none;
    color:white;
    margin-left: 20px;
      :hover {
    color: var(--color--primary);
  }
}
`;

export default GlobalStyle;
