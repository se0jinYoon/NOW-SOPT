import styled from 'styled-components';
import { useEffect, useState } from 'react';
import GAME_DATA from '../../assets';

const GameMain = () => {
  // 게임 레벨
  const [gameLevel, setGameLevel] = useState(5);
  // 렌더링할 랜덤 추출 배열
  const [shuffledCardItems, setShuffledCardItems] = useState([]);
  // 카드 뒤집혔는지
  const [isFlipped, setIsFlipped] = useState(false);

  // 게임 레벨에 맞게 카드 랜덤 추출
  function getRandomDuplicatedItems(arr, num) {
    // 배열 랜덤으로 섞기
    const shuffledCardData = arr.sort(() => 0.5 - Math.random());
    // 게임 레벨에 맞게 추출하고 각 아이템 쌍 만들기
    const combinedCardData = shuffledCardData.slice(0, num).flatMap((item) => [item, { ...item }]);
    // 다시 섞기
    const shuffledResult = combinedCardData.sort(() => 0.5 - Math.random());

    return shuffledResult;
  }

  // 초기 렌더링
  useEffect(() => {
    setShuffledCardItems(getRandomDuplicatedItems(GAME_DATA, 5));
  }, []);

  // 게임 레벨 함수
  const onClickGameLevel = (num) => {
    setGameLevel(num);
    setShuffledCardItems(getRandomDuplicatedItems(GAME_DATA, num));
  };

  // 카드 클릭 함수
  const onClickCardItem = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <GameMainWrapper>
      <GameLevelWrapper>
        <GameLevelBtn onClick={() => onClickGameLevel(5)} $selected={gameLevel === 5}>
          EASY
        </GameLevelBtn>
        <GameLevelBtn onClick={() => onClickGameLevel(7)} $selected={gameLevel === 7}>
          NORMAL
        </GameLevelBtn>
        <GameLevelBtn onClick={() => onClickGameLevel(9)} $selected={gameLevel === 9}>
          HARD
        </GameLevelBtn>
      </GameLevelWrapper>
      <CardItemWrapper>
        {shuffledCardItems.map((item, idx) => (
          <CardItem key={item.name + idx.toString()} onClick={onClickCardItem} className={isFlipped ? 'flipped' : ''}>
            <CardItemFront src={item.src} alt={item.name} className={isFlipped ? 'flipped' : ''} />
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

  width: 90%;
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
  width: 100%;

  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
`;

const CardItem = styled.div`
  position: relative;

  width: 13rem;
  height: 15rem;

  transition: 1s ease-in-out;
  transform-style: preserve-3d;
  perspective: 1000px;
  transform: rotateY(${({ className }) => (className === 'flipped' ? '180deg' : '0deg')});
`;

const CardItemFront = styled.img`
  position: absolute;

  width: 100%;
  height: 100%;

  object-fit: cover;
  border: 4px double ${({ theme }) => theme.colors.black};

  cursor: pointer;

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
  transform: rotateY(${({ className }) => (className === 'flipped' ? '180deg' : '')});
`;
