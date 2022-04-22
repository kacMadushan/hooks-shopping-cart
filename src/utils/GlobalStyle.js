import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }

  body {
    font-weight: 400;
    font-size: 1rem;
    background-color: hsl(0 0% 100%);
  }
`;

export default GlobalStyle;