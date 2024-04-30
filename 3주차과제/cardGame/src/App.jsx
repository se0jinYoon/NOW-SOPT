import { ThemeProvider } from 'styled-components';
import styled from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';
import theme from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Test>안녕</Test>
    </ThemeProvider>
  );
}

export default App;

const Test = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.gray};
  color: ${({ theme }) => theme.colors.black};
`;
