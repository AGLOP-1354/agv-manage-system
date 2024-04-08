import { createGlobalStyle } from 'styled-components';



const GlobalStyle = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.colors.bg_100};
  }
`;

export default GlobalStyle;
