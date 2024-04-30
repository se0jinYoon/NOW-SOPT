import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
${reset}

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
    width: 100%;
    height: 100%;

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
