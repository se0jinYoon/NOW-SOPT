/* eslint-disable react/prop-types */
import styled from 'styled-components';

import { EASY, NORMAL, HARD } from '../../assets/constants/gameLevel';

const GameMain = ({
  shuffledCardItems,
  isFlipped,
  setIsFlipped,
  gameLevel,
  setGameLevel,
  selectedCards,
  setSelectedCards,
  matchedCards,
  setMatchedCards,
  resetGame,
}) => {
  // 게임 레벨 함수
  const onClickGameLevel = (num) => {
    setGameLevel(num);
    resetGame(num);
  };

  // 카드 클릭 함수
  const onClickCardItem = (item, index) => {
    if (matchedCards.includes(item.name) || selectedCards.length === 2) {
      return;
    }

    // 카드 뒤집기
    setIsFlipped((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });

    setSelectedCards((prevSelectedCards) => [...prevSelectedCards, { item, index }]);

    // 카드 비교
    if (selectedCards.length === 1) {
      const [firstCard] = selectedCards;
      if (firstCard.item.name === item.name) {
        setMatchedCards((prevMatchedCards) => [...prevMatchedCards, firstCard.item.name]);
        setSelectedCards([]);
      } else {
        setTimeout(() => {
          setIsFlipped((prevState) => {
            const newState = [...prevState];
            newState[firstCard.index] = false;
            newState[index] = false;
            return newState;
          });
          setSelectedCards([]);
        }, 1000);
      }
    }
  };

  return (
    <GameMainWrapper>
      <GameLevelWrapper>
        <GameLevelBtn onClick={() => onClickGameLevel(EASY)} $selected={gameLevel === EASY}>
          EASY
        </GameLevelBtn>
        <GameLevelBtn onClick={() => onClickGameLevel(NORMAL)} $selected={gameLevel === NORMAL}>
          NORMAL
        </GameLevelBtn>
        <GameLevelBtn onClick={() => onClickGameLevel(HARD)} $selected={gameLevel === HARD}>
          HARD
        </GameLevelBtn>
      </GameLevelWrapper>
      <CardItemWrapper>
        {shuffledCardItems.map((item, idx) => (
          <CardItem
            key={item.name + idx.toString()}
            onClick={() => onClickCardItem(item, idx)}
            $isFlipped={isFlipped[idx]}
          >
            <CardItemFront src={item.src} alt={item.name} />
            <CardItemBack />
          </CardItem>
        ))}
      </CardItemWrapper>
    </GameMainWrapper>
  );
};

export default GameMain;

const GameMainWrapper = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 3rem;

  width: 95%;

  margin: 11rem 0 4rem 0;
`;

const GameLevelWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
`;

const GameLevelBtn = styled.button`
  padding: 0.4rem 0.8rem;

  border: 4px double ${({ theme, $selected }) => ($selected ? theme.colors.gray : theme.colors.black)};

  background-color: ${({ theme, $selected }) => ($selected ? theme.colors.blue : theme.colors.gray)};
  color: ${({ theme, $selected }) => ($selected ? theme.colors.white : theme.colors.black)};

  font-size: 1.4rem;

  cursor: pointer;
`;

const CardItemWrapper = styled.section`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;

  width: 100%;
`;

const CardItem = styled.div`
  position: relative;

  width: 13rem;
  height: 15rem;

  transition: 1s ease-in-out;
  transform-style: preserve-3d;
  perspective: 1000px;
  transform: rotateY(${({ $isFlipped }) => ($isFlipped ? '180deg' : '0deg')});
`;

const CardItemFront = styled.img`
  position: absolute;

  width: 100%;
  height: 100%;

  object-fit: cover;
  border: 4px double ${({ theme }) => theme.colors.black};

  cursor: default;

  backface-visibility: hidden;
  transform: rotateY(180deg);
`;

const CardItemBack = styled.div`
  position: absolute;

  width: 100%;
  height: 100%;

  border: 4px double ${({ theme }) => theme.colors.black};
  background-color: ${({ theme }) => theme.colors.gray};

  cursor: pointer;

  backface-visibility: hidden;
`;
