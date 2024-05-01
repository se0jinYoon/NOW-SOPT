/* eslint-disable react/prop-types */
import styled from 'styled-components';

const Header = ({
  shuffledCardItems,
  setShuffledCardItems,
  setIsFlipped,
  getRandomDuplicatedItems,
  gameLevel,
  setSelectedCards,
  setMatchedCards,
  matchedCards,
}) => {
  // 리셋 함수
  const onClickReset = () => {
    setShuffledCardItems(getRandomDuplicatedItems(gameLevel));
    setIsFlipped(Array(shuffledCardItems.length).fill(false));
    setSelectedCards([]);
    setMatchedCards([]);
  };

  return (
    <HeaderWrapper>
      <HeaderTitle>웨비를 찾아라</HeaderTitle>
      <Score>
        {matchedCards.length} / {gameLevel}
      </Score>
      <ResetBtn onClick={onClickReset}>RESET</ResetBtn>
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;

  width: 100%;
  padding: 1.3rem 0;

  background-color: ${({ theme }) => theme.colors.blue};

  z-index: 1;
`;

const HeaderTitle = styled.h1`
  color: ${({ theme }) => theme.colors.white};
  font-size: 2.5rem;
`;

const Score = styled.span`
  color: ${({ theme }) => theme.colors.white};
  font-size: 2.3rem;
`;

const ResetBtn = styled.button`
  position: absolute;
  top: 1.3rem;
  right: 1.3rem;

  text-align: center;

  padding: 0.1rem 0.2rem;
  border: 4px double ${({ theme }) => theme.colors.black};

  background-color: ${({ theme }) => theme.colors.gray};
  color: ${({ theme }) => theme.colors.black};

  font-size: 1.8rem;
  cursor: pointer;
`;
