import { ThemeProvider } from 'styled-components';
import styled from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';
import theme from './styles/theme';

import { useState, useEffect } from 'react';

import Header from './components/header/Header';
import GameMain from './components/gameMain/GameMain';
// import Modal from './components/modal/Modal';
import DialogModal from './components/modal/DialogModal';

import { getRandomDuplicatedItems } from './utils/getRandomDuplicatedItems';
import { EASY } from './assets/constants/gameLevel';

function App() {
  // 게임 레벨
  const [gameLevel, setGameLevel] = useState(EASY);
  // 렌더링할 랜덤 추출 배열
  const [shuffledCardItems, setShuffledCardItems] = useState(getRandomDuplicatedItems(EASY));
  // 카드 뒤집혔는지
  const [isFlipped, setIsFlipped] = useState(Array(shuffledCardItems.length).fill(false));
  // 현재 선택된 카드 배열
  const [selectedCards, setSelectedCards] = useState([]);
  // 정답 된 카드 확인
  const [matchedCards, setMatchedCards] = useState([]);

  // shuffledCardItems가 변경될 때마다 isFlipped 배열 초기화
  useEffect(() => {
    setIsFlipped(Array(shuffledCardItems.length).fill(false));
  }, [shuffledCardItems, gameLevel]);

  // 게임 리셋 함수
  const resetGame = (gameLevel) => {
    setShuffledCardItems(getRandomDuplicatedItems(gameLevel));
    setIsFlipped(Array(shuffledCardItems.length).fill(false));
    setSelectedCards([]);
    setMatchedCards([]);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Wrapper>
        {/* <Modal gameLevel={gameLevel} matchedCards={matchedCards} resetGame={resetGame} /> */}
        <DialogModal gameLevel={gameLevel} matchedCards={matchedCards} resetGame={resetGame} />
        <Header gameLevel={gameLevel} matchedCards={matchedCards} resetGame={resetGame} />
        <GameMain
          shuffledCardItems={shuffledCardItems}
          setIsFlipped={setIsFlipped}
          isFlipped={isFlipped}
          gameLevel={gameLevel}
          setGameLevel={setGameLevel}
          selectedCards={selectedCards}
          setSelectedCards={setSelectedCards}
          matchedCards={matchedCards}
          setMatchedCards={setMatchedCards}
          resetGame={resetGame}
        />
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
