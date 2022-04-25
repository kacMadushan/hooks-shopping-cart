import { createGlobalStyle } from 'styled-components';
import { normalize } from 'polished';
import { primaryFont, typeScale } from './typography';

export const GlobalStyle = createGlobalStyle`
  ${normalize()}

  html {
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    font-size: ${typeScale.paragraph};
    font-family: ${primaryFont};
    -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  }
`;