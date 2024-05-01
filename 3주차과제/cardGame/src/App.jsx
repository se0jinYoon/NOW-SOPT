import { ThemeProvider } from 'styled-components';
import styled from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';
import theme from './styles/theme';

import { useState, useEffect } from 'react';

import Header from './components/header/Header';
import GameMain from './components/gameMain/GameMain';
import Modal from './components/modal/Modal';
import Spacing from './components/common/Spacing';

import GAME_DATA from './assets';

function App() {
  // 게임 레벨
  const [gameLevel, setGameLevel] = useState(5);
  // 렌더링할 랜덤 추출 배열
  const [shuffledCardItems, setShuffledCardItems] = useState([]);
  // 카드 뒤집혔는지
  const [isFlipped, setIsFlipped] = useState(Array(shuffledCardItems.length).fill(false));
  // 현재 선택된 카드 배열
  const [selectedCards, setSelectedCards] = useState([]);
  // 정답 된 카드 확인
  const [matchedCards, setMatchedCards] = useState([]);

  // 게임 레벨에 맞게 카드 랜덤 추출
  function getRandomDuplicatedItems(num) {
    // 배열 랜덤으로 섞기
    const shuffledCardData = GAME_DATA.sort(() => 0.5 - Math.random());
    // 게임 레벨에 맞게 추출하고 각 아이템 쌍 만들기
    const combinedCardData = shuffledCardData.slice(0, num).flatMap((item) => [item, { ...item }]);
    // 다시 섞기
    const shuffledResult = combinedCardData.sort(() => 0.5 - Math.random());

    return shuffledResult;
  }

  // 초기 렌더링
  useEffect(() => {
    setShuffledCardItems(getRandomDuplicatedItems(5));
  }, []);

  // shuffledCardItems가 변경될 때마다 isFlipped 배열 초기화
  useEffect(() => {
    setIsFlipped(Array(shuffledCardItems.length).fill(false));
  }, [shuffledCardItems]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Wrapper>
        <Modal
          gameLevel={gameLevel}
          matchedCards={matchedCards}
          setIsFlipped={setIsFlipped}
          setSelectedCards={setSelectedCards}
          setMatchedCards={setMatchedCards}
          getRandomDuplicatedItems={getRandomDuplicatedItems}
          setShuffledCardItems={setShuffledCardItems}
        />
        <Header
          shuffledCardItems={shuffledCardItems}
          setShuffledCardItems={setShuffledCardItems}
          setIsFlipped={setIsFlipped}
          getRandomDuplicatedItems={getRandomDuplicatedItems}
          gameLevel={gameLevel}
          setSelectedCards={setSelectedCards}
          setMatchedCards={setMatchedCards}
          matchedCards={matchedCards}
        />
        <Spacing marginBottom="11" />
        <GameMain
          setShuffledCardItems={setShuffledCardItems}
          shuffledCardItems={shuffledCardItems}
          setIsFlipped={setIsFlipped}
          isFlipped={isFlipped}
          getRandomDuplicatedItems={getRandomDuplicatedItems}
          gameLevel={gameLevel}
          setGameLevel={setGameLevel}
          selectedCards={selectedCards}
          setSelectedCards={setSelectedCards}
          matchedCards={matchedCards}
          setMatchedCards={setMatchedCards}
        />
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
