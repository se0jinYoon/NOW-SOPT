// GlobalStyle.js
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
@font-face {
     font-family: 'DungGeunMo';
     src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_six@1.2/DungGeunMo.woff') format('woff');
     font-weight: normal;
     font-style: normal;
}

*{
    margin: 0;
    padding: 0;
}

body {
    background-color: ${({ theme }) => theme.colors.lightGreen};
    font-family: 'DungGeunMo';
    font-size: 62.5%;
}

button {
    border: none;
    
    font-family: 'DungGeunMo';
}
`;

export default GlobalStyle;
