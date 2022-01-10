import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --color--primary: rgb(0, 230, 200);
    --color--secondary: rgb(1, 30, 38);
    --color--thirdary: #ffffff;
  }
  *{
    box-sizing: border-box;
    font-family: 'Josefin Sans', sans-serif;
  
  }
  body {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
  }
  a {
    text-decoration: none;
    color:white;
    margin-left: 20px;
      :hover {
    color: var(--color--primary);
  }
}

::-webkit-scrollbar {
  width: 16px;
}
::-webkit-scrollbar-thumb {
  background: #00e6c8;
  border: 0px none #ffffff;
  border-radius: 0px;
}
::-webkit-scrollbar-thumb:hover {
  background: #00c8aa;
}
::-webkit-scrollbar-thumb:active {
  background: #00e6c8;
}
::-webkit-scrollbar-track {
  background: #001e26;
  border: 0px none #ffffff;
  border-radius: 0px;
}
`;

export default GlobalStyle;
