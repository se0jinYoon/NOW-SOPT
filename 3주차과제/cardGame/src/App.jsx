import { ThemeProvider } from 'styled-components';
import styled from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';
import theme from './styles/theme';

import Header from './components/header/Header';
import GameMain from './components/gameMain/GameMain';
import Spacing from './components/common/Spacing';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Wrapper>
        <Header />
        <Spacing marginBottom="11" />
        <GameMain />
        <Spacing marginBottom="4" />
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  background-color: ${({ theme }) => theme.colors.gray};
  color: ${({ theme }) => theme.colors.black};
`;
