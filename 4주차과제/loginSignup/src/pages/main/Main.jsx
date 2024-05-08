import styled from 'styled-components';
import Button from '../../commons/Button';
import ButtonWrapper from '../../commons/ButtonWrapper';

const Main = () => {
  return (
    <MainWrapper>
      <MainImg src="/src/assets/gifs/modalCongrats.gif" loop="infinite" />
      <ButtonWrapper>
        <Button content="MY PAGE" />
        <Button content="SIGN UP" />
      </ButtonWrapper>
    </MainWrapper>
  );
};
export default Main;

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;

  padding: 5rem 0;
`;

const MainImg = styled.img`
  width: 50rem;
  height: 30rem;

  border-radius: 0.5rem;
`;
