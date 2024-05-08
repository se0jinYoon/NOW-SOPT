import GAME_DATA from '../assets/constants/gameData';

// 게임 레벨에 맞게 카드 랜덤 추출
export const getRandomDuplicatedItems = (num) => {
  // 배열 랜덤으로 섞기
  const shuffledCardData = GAME_DATA.sort(() => 0.5 - Math.random());
  // 게임 레벨에 맞게 추출하고 각 아이템 쌍 만들기
  const combinedCardData = shuffledCardData.slice(0, num).flatMap((item) => [item, { ...item }]);
  // 다시 섞기
  const shuffledResult = combinedCardData.sort(() => 0.5 - Math.random());

  return shuffledResult;
};
