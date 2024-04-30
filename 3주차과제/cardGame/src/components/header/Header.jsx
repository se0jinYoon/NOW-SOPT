import styled from 'styled-components';

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderTitle>웨비를 찾아라</HeaderTitle>
      <Score>3 / 5</Score>
      <ResetBtn>RESET</ResetBtn>
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
