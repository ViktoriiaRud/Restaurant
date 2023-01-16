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

    h3 {
      text-align: center;
      font-family: 'Cormorant Infant';
      font-style: normal;
      font-weight: 400;
      font-size: 30px;
      line-height: 39px;
      letter-spacing: 0.2px;
      color: #292E36;
    }

    h4 {
      margin-top: 20px;
      font-family: 'Josefin Sans';
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 30px;
      letter-spacing: 0.2px;
      color: #555555;  
    }

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
