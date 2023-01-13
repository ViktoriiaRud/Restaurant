import { createGlobalStyle } from 'styled-components';
import { breakpoint, reset } from '../theme';


const GlobalStyle = createGlobalStyle`
  ${reset}
  *, *::before, *::after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: ${({ theme }) => theme.font1};
    font-size: ${({ theme }) => theme.fontSide};
    overflow-x: hidden;
    word-break: break-word;
    padding-top: 10px;

    ${breakpoint.lg} {
      padding-top: 0;
    }

    ${breakpoint.sm} {
      margin: 0 auto;
    }

    ${breakpoint.sm} {
     *, align-items: center;
    }

    
  }

  button:focus-visible, a:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.salmon};
    outline-offset: 2px;
  }

  a[href], button {
    cursor: pointer;
  }
  ;
`;

export default GlobalStyle;
