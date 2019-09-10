import { createGlobalStyle } from 'styled-components';
import { reset } from 'reset-css';
import theme from './theme';

const GlobalStyle = createGlobalStyle`
  ${reset};
  @import url('https://fonts.googleapis.com/css?family=Parisienne|Tangerine:400,700&display=swap');

  * {
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-family: 'Tangerine', sans-serif;
  }

  h1 {
    font-size: 12rem
  }

  h2 {
    font-size: 6rem
  }

  h4 {
    font-size: 4rem
  }

  h1, h2, a {
    text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;

export default GlobalStyle;
